
const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class polus extends Command {
	constructor(client) {
		super(client, {
			name: "polus",
			description: "polus map among us",
			usage: ".Polus",
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
        .setImage("https://media.discordapp.net/attachments/764330533865390091/789749086034067466/4IojRx6.png?width=967&height=493")
        message.channel.send(embed)
	}
};

module.exports = polus;