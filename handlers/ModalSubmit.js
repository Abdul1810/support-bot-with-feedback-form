const { 
	ActionRowBuilder,
	ModalSubmitFieldsResolver,
	EmbedBuilder,
	ButtonBuilder
} = require('discord.js')

const { config } = require('../config')
const disableButton = require("../util/disableButton");

module.exports = async (interaction) => {
    const feedbackChannel = interaction.guild.channels.cache.get(config.log_channel_id)
    switch (interaction.customId) {
        case '_others':
        {
            const res = new ModalSubmitFieldsResolver(interaction.components)
            const Sub = res.getField("_sub").data
            const Exp = res.getField("_exp").data

            const linkButton = new ButtonBuilder()
                .setURL(`discord://-/users/${interaction.user.id}`)
                .setLabel("Go to User")
                .setStyle(5)
            const replyButton = new ButtonBuilder()
                .setCustomId(interaction.user.id)
                .setLabel("Reply")
                .setStyle(1)
                .setDisabled(false)

            const responseEmbed = new EmbedBuilder()
                .setColor("Red")
                .setAuthor({
                    name: `New Issue`,
                    iconURL: interaction.user.avatarURL()
                })
                .setDescription(`\n\u200b**From** : ${interaction.user.username}#${interaction.user.discriminator}\n\u200b**Subject** : ${Sub.value}\n\u200b**Message** : ${Exp.value}`)
                .setTimestamp()

            feedbackChannel.send({ embeds: [responseEmbed], components: [new ActionRowBuilder().addComponents([ replyButton, linkButton ])] })
            return await interaction.reply({
                content: "Your Response are Recorded.\nPlease Wait Our Support Team Will Get Back To You",
                ephemeral: true
            })
        }
        case '_feedback':
        {
            const res = new ModalSubmitFieldsResolver(interaction.components)
            const Feedback = res.getField("_msg").data

            const linkButton = new ButtonBuilder()
                .setURL(`discord://-/users/${interaction.user.id}`)
                .setLabel("Go to User")
                .setStyle(5)
            const replyButton = new ButtonBuilder()
                .setCustomId(interaction.user.id)
                .setLabel("Reply")
                .setStyle(1)
                .setDisabled(false)

            const responseEmbed = new EmbedBuilder()
                .setColor("Blurple")
                .setAuthor({
                    name: `Feedback`,
                    iconURL: interaction.user.avatarURL()
                })
                .setDescription(`\n\u200b**From** : ${interaction.user.username}#${interaction.user.discriminator}\n\u200b**Feedback** : ${Feedback.value}`)
                .setTimestamp()

            feedbackChannel.send({ embeds: [responseEmbed], components: [new ActionRowBuilder().addComponents([ replyButton, linkButton ])] })
            return await interaction.reply({
                content: "Your Response are Recorded.\nPlease Wait Our Support Team Will Get Back To You",
                ephemeral: true
            })
        }
        default:
        {
            const res =  new ModalSubmitFieldsResolver(interaction.components)
            const Message = res.getField("_msg").data
            disableButton(interaction.message, interaction.member.displayName)
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
                await USER.send({
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