const { 
	ActionRowBuilder,
	ModalBuilder,
	TextInputBuilder
} = require('discord.js')

const { config, embed, responses } = require('../config')

module.exports = async (interaction) => {
    let responseembed =
    {
        author:{ name: embed.title, icon_url: embed.thumbnail ? embed.thumbnail_url : interaction.client.user.displayAvatarURL({ size: 2048, format: "png", dynamic: false}) },
        color: Number(`0x${embed.color}`),
        description: null,
        timestamp: new Date(),
        footer:{
            text: interaction.guild.name
        }
    }
    const logChannel = interaction.guild.channels.cache.get(config.log_channel_id)
    switch (interaction.values[0]) {
        case 'option_1': {
            responseembed.description = `\u200b\n**${responses.response_1}**\n\u200b\n`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            // let invitebutton = new ButtonBuilder()
            //     .setLabel("Invite Link")
            //     .setStyle("url")
            //     .setURL("Link")
            // let buttonRow = new ActionRowBuilder()
            // 	.addComponent(invitemybot)
            //!If You Want Button in the Response remove // from the the Above 6 lines
            return interaction.reply({ embeds: [responseembed], ephemeral: true })//If you want to send link button add ,component: buttonRow after the ephermeral: true declaration
        }
        case 'option_2': {
            responseembed.description = `**${responses.response_2}**\n\u200b\n`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
        case 'option_3': {
            responseembed.description = `**${responses.response_3}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
        case 'option_4': {
            responseembed.description = `**${responses.response_4}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
        case 'option_5': {
            responseembed.description = `**${responses.response_5}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
        case 'others': {
            const SubjectInput = new TextInputBuilder()
                .setCustomId("_sub")
                .setLabel("Subject")
                .setPlaceholder("Subject Of Your Issue/Problem")
                .setRequired(true)
                .setMinLength(3)
                .setMaxLength(75)
                .setStyle(1)

            const ContentInput = new TextInputBuilder()
                .setCustomId("_exp")
                .setLabel("Message")
                .setPlaceholder("Explain Brief About Your Issue")
                .setRequired(true)
                .setMinLength(1)
                .setMaxLength(250)
                .setStyle(2)

            const firstRow = new ActionRowBuilder().addComponents([SubjectInput])
            const secondRow = new ActionRowBuilder().addComponents([ContentInput])

            const othersModal = new ModalBuilder()
                .setTitle("Describe Your Issue")
                .setCustomId("_others")
                .addComponents([ firstRow, secondRow ])

            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.showModal(othersModal)
        }
        case 'feedback': {
            const FeedbackInput = new TextInputBuilder()
                .setCustomId("_msg")
                .setLabel("Feedback")
                .setPlaceholder("Write Your Feedback here ... ")
                .setRequired(true)
                .setMinLength(3)
                .setMaxLength(250)
                .setStyle(2)

            const firstRow = new ActionRowBuilder().addComponents([FeedbackInput])

            const FeedbackModal = new ModalBuilder()
                .setTitle("Feedback Form")
                .setCustomId("_feedback")
                .addComponents([ firstRow ])

            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.customId}\nTimeStamp: ${new Date()}`)
            return interaction.showModal(FeedbackModal)
        }
        default:
        {
            const res =  new ModalSubmitFieldsResolver(interaction.components)
            const Message = res.getField("_msg").data
            const replyEmbed = new EmbedBuilder()
                .setAuthor({
                    name: "Your Issue Was Responded By Supoort Team",
                    iconURL: interaction.guild.iconURL()
                })
                .setColor("Green")
                .setFooter({
                    text: interaction.guild.name
                })
                .setDescription(`**Message** : ${Message.value}`)
                .setTimestamp()
            
            try {
                const USER = interaction.client.users.cache.get(interaction.customId)
                USER.send({
                    embeds: [replyEmbed]
                })
                return await interaction.reply(`Your Message Was Sent To ${USER.username}#${USER.discriminator} in dms.`)
            }
            catch (e) {
                return await interaction.reply(`The User Dms Were Closed.`)
            }
        }
    }
}