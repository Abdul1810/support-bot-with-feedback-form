const { 
	ActionRowBuilder,
	SelectMenuBuilder
} = require('discord.js')

const { config, embed, options } = require('../testconfig')
const owners = config.owners;

module.exports = async (interaction) => {
	if (interaction.commandName !== "create") return
    if (!owners.includes(interaction.user.id)) 
        return await interaction.reply({ content: "You aren\'t Authorized To use This Command!", ephemeral: true })

    const Help_Embed = {
        author: { name: embed.title },
        thumbnail: {
            url: embed.thumbnail ? embed.thumbnail_url : interaction.client.user.displayAvatarURL({ size: 2048, dynamic: false, format:"png"})
        },
        color: Number(`0x${embed.color}`),
        description: embed.description,
        footer:{
            text: "support-bot-with-feedback-menu"
        }
    }

    const Help_Menu = new SelectMenuBuilder()
        .setCustomId('_menu')
        .setPlaceholder('Nothing Selected !')
        .addOptions(options)
        .setMinValues(1)
        .setMaxValues(1)

    const Help_Row = new ActionRowBuilder()
        .addComponents([Help_Menu])

    await interaction.reply({ embeds: [Help_Embed], components: [Help_Row] })
}