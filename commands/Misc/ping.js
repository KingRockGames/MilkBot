const Discord = require("discord.js");
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class Ping extends Command {
	constructor(client) {
		super(client, {
			name: "ping",
			description: "view the latency",
			usage: ".ping",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["pong", "latency"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
	    message.channel.send(`:ping_pong: **| Pong!** \n:zap: **| API Ping:** **${Math.round(
			client.ws.ping
		  )}ms** \n:watch: **| Gateway:** **${Date.now() - message.createdTimestamp}ms** \n:map: **| Bot region:** **AU  :flag_au:** \n:question: **| Shard:** **${client.shard.ids}**`)

	}
};

module.exports = Ping;
