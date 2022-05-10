//Discord Client
const { 
	Client,
	IntentsBitField: Intents,
	ActionRowBuilder,
	SelectMenuBuilder
} = require('discord.js')
const client = new Client({ intents: [Intents.Flags.Guilds, Intents.Flags.GuildMessages, Intents.Flags.MessageContent] })

//Importing Rest & api-types
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')

//Loading Config
const { config, embed, options } = require('./testconfig')
console.log('Config Loaded')
const owners = config.owners

//Loading Event Handler
const handleInteraction = require("./handlers")

//Ready Event
client.on('ready', async () => {
	console.log(`${client.user.tag} is Ready!`)

	client.user.setPresence({
		status: "dnd",
		activities: [{
			name: config.status,
			type: 2
		}]
	})
	
	//Registering Slash
	if (config.enable_slash) {
		const rest = new REST({ version: '10' }).setToken(config.token)

		const commands = [{
			name: 'create',
			description: 'Replies with Help Embed and Menu Component!'
		}]
		
		try {
			console.log('Started refreshing application (/) commands.')
			
			await rest.put(
				Routes.applicationCommands(client.user.id),
				{ body: commands },
			);

			console.log('Successfully reloaded application (/) commands.')
		}
		catch (error) {
			console.error(error)
		}
	}
})

/**
 * @author Abdul#5464 <https://github.com/Abdul1810/>
 */

client.on("interactionCreate", async (interaction) => {
	await handleInteraction(interaction)
})

//Message Event only Listen to owners so make sure to fill the owner array in config
client.on("messageCreate", async (msg) => {
	if (msg.author.bot) return
	if (msg.channel.isDM()) return
	if (!owners.includes(msg.author.id)) return
	if (msg.content === `${config.prefix}create`)
	{
		await msg.delete().catch(() => {})

		const Help_Menu = new SelectMenuBuilder()
			.setCustomId('_menu')
			.setPlaceholder('Nothing Selected !')
			.addOptions(options)
			.setMinValues(1)
			.setMaxValues(1)

		const Help_Row = new ActionRowBuilder()
			.addComponents([Help_Menu])
		
		const Help_Embed = {
			author: { name: embed.title },
			thumbnail: {
				url: embed.thumbnail ? embed.thumbnail_url : interaction.client.user.displayAvatarURL({ size: 2048, dynamic: false, format:"png"})
			},
			color: Number(`0x${embed.color}`),
			description: embed.description,
			footer:{
				text: msg.guild.name
			}
		}
		return msg.channel.send({ embeds: [Help_Embed], components: [Help_Row] })
	}
})
this.bot = client;
//Bot Coded By Abdul#5464
//For Support Join Support Server https://discord.gg/sAMznQK2NG
//For Feature Request Open a Pull Request

client.login(config.token).catch(() => console.log('Invalid Token.Make Sure To Fill config.json'))
