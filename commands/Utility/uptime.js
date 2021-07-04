const Discord = require("discord.js");
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class Uptime extends Command {
	constructor(client) {
		super(client, {
			name: "uptime",
			description: "view the uptime",
			usage: ".uptime",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["uptime", "up"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    message.channel.send(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`);
	}
};

module.exports = Uptime;