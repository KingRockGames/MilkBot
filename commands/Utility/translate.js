const translate = require("translate-google");
const Discord = require("discord.js");
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class Translate extends Command {
	constructor(client) {
		super(client, {
			name: "translate",
			description: "translate any thing to eng",
			usage: ".translate",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["translate", "tran"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    translate(args.join(" "), {to : 'en'}).then(res => {
      message.channel.send(res)
  })
	}
};

module.exports = Translate;