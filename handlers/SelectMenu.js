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
        case 'option_6': {
            responseembed.description = `**${responses.response_6}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
	case 'option_7': {
            responseembed.description = `**${responses.response_7}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
	case 'option_8': {
            responseembed.description = `**${responses.response_8}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
	case 'option_9': {
            responseembed.description = `**${responses.response_9}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
	case 'option_10': {
            responseembed.description = `**${responses.response_10}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
	case 'option_11': {
            responseembed.description = `**${responses.response_11}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }
	case 'option_12': {
            responseembed.description = `**${responses.response_12}**`
            logChannel.send(`> **${interaction.user.username + "#" + interaction.user.discriminator}**(${interaction.user.id}) Used ${interaction.values[0]}\nTimeStamp: ${new Date()}`)
            return interaction.reply({ embeds: [responseembed], ephemeral: true })
        }

    }
}