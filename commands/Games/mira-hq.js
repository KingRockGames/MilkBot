const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class mira extends Command {
	constructor(client) {
		super(client, {
			name: "mira-hq",
			description: "mira-hq map among us",
			usage: ".mira-hq",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        const embed = new Discord.MessageEmbed()
        .setImage("https://media.discordapp.net/attachments/764330533865390091/789748994536374272/5tqPYib.png?width=871&height=486")
        message.channel.send(embed)
	}
};

module.exports = mira;