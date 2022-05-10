const { ButtonComponent } = require('@discordjs/builders')
const {
    ActionRowBuilder,
    Message
} = require('discord.js')


/**
 * @author {Abdul1810}
 * @param {Message} oldMessage 
 */
module.exports = (oldMessage, displayName) => {
    const [row] = oldMessage.components
    const oldButton = new ButtonComponent(row.components[0])
    oldButton.setDisabled(true).setLabel(`Replied By ${displayName}`).setCustomId("_dis")

    const newRow = new ActionRowBuilder().addComponents([oldButton, row.components[1]])
    oldMessage.edit({ components: [newRow] })
    
}