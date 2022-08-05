const { Interaction } = require("discord.js")

/**
 * 
 * @param {Interaction} interaction 
 */

module.exports = async (interaction) => {
    if (interaction.isButton()) return await require("./Button")(interaction)
    else if (interaction.isCommand()) return await require("./Command")(interaction)
    else if (interaction.isSelectMenu()) return await require("./SelectMenu")(interaction)
    else return console.log("Unknown Interaction")
}