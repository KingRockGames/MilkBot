const Discord = require("discord.js");
const os = require('os');
const osu = require('node-os-utils')
const mem = osu.mem
const cpu = osu.cpu
const Command = require("../../base/Command.js");
class badges extends Command {
	constructor(client) {
		super(client, {
			name: "badges",
			description: "get info about the badges you can get with the bot",
			usage: ".badges",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["badges"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Badges')
        .setDescription('Here is a list of badges you can get with the bot \n\n Some people and servers have custom badges you can buy one with **Milk Coins** for more info run .shop \n\n **User Badges** \n')
        .addField('Devs <:MilkBotDev:822657126203785236>', `Only the devs / owners get this `, )
        .addField("Support Team <:Milkbotsupportteam:763458189194559498>", "You get this for being part of the **Milk Bot Support Team**")
        .addField("Bot Bug Finder <:BotBugFinder:784658006863249409>", "You get this for finding a bug when using the bot ")
        .addField("Server Booster <:Serverbooster:773159595900272650>", "You get this for boosting Milk Bot's Support Server")
		.addField("Cool People <:RED:758637149464952842>", "Cool People like other bot devs or cool people \n\n **Server Badges** \n")
		.addField("Support Server <:Supportserver1:803493337608486942>", "Only Milk Bot's Support Server has this")
		.addField("OG Server <:OGserver:803493337255641109>", "Only the first 5 server Milk Bot was added to get this ")
		.addField("Beta Server :bell:", "Your server will get this if your a bate tester ")
      message.channel.send(embed)
    
	}
};

module.exports = badges;