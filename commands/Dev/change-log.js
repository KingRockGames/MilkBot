const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class change extends Command {
	constructor(client) {
		super(client, {
			name: "change log",
			description: "change logs",
			usage: ".change-log",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["changelog", "change"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: true
		});
	}

	async run(message, args, client) {
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("**v2.0.1 Change Logs** \n**----------------**\n As of now we will put all BETA items in Milk Bot BETA")
        
        
        message.channel.send(embed)
	}
};

module.exports = change;