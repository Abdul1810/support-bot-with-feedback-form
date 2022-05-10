const { 
	ActionRowBuilder,
	ModalBuilder,
	TextInputBuilder
} = require('discord.js')

// const disableButton = require("../util/disableButton")

module.exports = async (interaction) => {
    const MessageInput = new TextInputBuilder()
        .setCustomId("_msg")
        .setLabel("Message")
        .setPlaceholder("Type your Message Here ...")
        .setRequired(true)
        .setMinLength(3)
        .setMaxLength(150)
        .setStyle(1)

    const firstRow = new ActionRowBuilder().addComponents([MessageInput])

    const replyModal = new ModalBuilder()
        .setTitle(`Reply to ${interaction.guild.members.cache.get(interaction.customId).displayName}`)
        .setCustomId(interaction.customId)
        .addComponents([ firstRow ])

    return await interaction.showModal(replyModal)
}