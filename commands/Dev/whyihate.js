const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class why extends Command {
	constructor(client) {
		super(client, {
			name: "whyihate",
			description: "Why i hate this server",
			usage: ".whyihate",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["why", "hate"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: true
		});
	}

	async run(message, args, client) {
        message.channel.send("https://cdn.discordapp.com/attachments/764330533865390091/792375169292304394/video0.mp4")
	}
};

module.exports = why;