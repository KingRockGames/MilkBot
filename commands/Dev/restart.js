const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class restart extends Command {
	constructor(client) {
		super(client, {
			name: "restart",
			description: "end the process",
			usage: ".restart",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["kill"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: true
		});
	}

	async run(message, args, client) {
	    message.channel.send('restarting...').then(() => {
        process.exit(1);
      })
	}
};

module.exports = restart;
