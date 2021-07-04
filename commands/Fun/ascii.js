const Discord = require("discord.js");
    figlet = require("figlet"),
	util = require("util"),
	figletAsync = util.promisify(figlet);
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class ascii extends Command {
	constructor(client) {
		super(client, {
			name: "ascii",
			description: "ascii",
			usage: ".ascii [random word]",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["ascii"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        const text = args.join(" ");
		if (!text || text.length > 20) {
			return message.reply("Put some test after .ascii");
		}

		const rendered = await figletAsync(text);
		message.channel.send("```" + rendered + "```");
	}
};

module.exports = ascii;