const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class Say extends Command {
	constructor(client) {
		super(client, {
			name: "say",
			description: "My name is doof and you'll do what I say.",
			usage: ".say message",
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
   if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send('you can not use that command')
        const text =message.content.split(" ").slice(1).join(' ')
        if (!text) return message.channel.send('what do you want to say')
        message.channel.send(text)
        message.delete()
	}
};

module.exports = Say;
