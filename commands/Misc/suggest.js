const Discord = require("discord.js"),
config = require('../../config.json') // for (config.bugchannelid)
      Command = require("../../base/Command.js");
class suggest extends Command {
	constructor(client) {
		super(client, {
			name: "suggest",
			description: "suggest something for the bot",
			usage: ".suggest",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["suggest"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    if (!args[0]) return message.reply("Please specify the suggestion. Example:\n`a meme command.`");
    if (args[0] === "bug") return message.reply("Please specify the suggestion. Example:\n`a meme command.`");
    args = args.join(" ");
    message.reply("Thanks for submitting a suggestion!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) suggested:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
	let msg = await client.channels.cache.get(config.suggestionchannelid).send(content)
	msg.react('👍');
    msg.react('👎')
	}
};

module.exports = suggest;