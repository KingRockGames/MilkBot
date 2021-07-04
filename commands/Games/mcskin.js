const Discord = require("discord.js");

const Command = require("../../base/Command.js");
class Mcskin extends Command {
	constructor(client) {
		super(client, {
			name: "mcskin",
			description: "Fine a Minecraft skin",
			usage: ".mcskin username",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["mcskin", "skin", "minecraft-skin"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        
        const text =message.content.split(" ").slice(1).join(' ')
        if (!text) return message.channel.send('Whos skin do you want ot find')
         const embed = new Discord.MessageEmbed()
        .setDescription('Here is ' + text + "'s skin")
        .setImage('https://minotar.net/armor/body/' + text + '/100.png')
        message.channel.send(embed)
       }
};

module.exports = Mcskin;