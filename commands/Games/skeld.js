const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class skeld extends Command {
	constructor(client) {
		super(client, {
			name: "skeld",
			description: "skeld map among us",
			usage: ".skeld",
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
        .setImage("https://media.discordapp.net/attachments/764330533865390091/789749151058886716/EOuPF9J.png?width=895&height=490")
        message.channel.send(embed)
	}
};

module.exports = skeld;