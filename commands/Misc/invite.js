const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class Invite extends Command {
	constructor(client) {
		super(client, {
			name: "invite",
			description: "TAKE ME WITH YOU!!!",
			usage: ".invite",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["inv"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    message.channel.send("**https://discord.com/api/oauth2/authorize?client_id=749966385668423721&permissions=2147483639&scope=bot**")
	}
};

module.exports = Invite;
