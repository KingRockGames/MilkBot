const Discord = require('discord.js')
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class reverse extends Command {
	constructor(client) {
		super(client, {
			name: "reverse",
			description: "reverse some text",
			usage: ".reverse [random word]",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["reverse"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        if (!args.length)
      return message.channel.send(`<:no:696126182348816426> | ${message.author}! Please specify the text to reverse!`)

    return message.channel.send(args.join(' ').split('').reverse().join(''))
	}
};

module.exports = reverse;