const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class patch extends Command {
	constructor(client) {
		super(client, {
			name: "change log",
			description: "change logs",
			usage: ".change-log",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["patch"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: true
		});
	}

	async run(message, args, client) {
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("**v1.9.0.6 PBTB Patch ** \n**----------------**\n  Fixed some small bugs")
    
        
        message.channel.send(embed)
	}
};

module.exports = patch;