const Discord = require("discord.js"),
config = require('../../config.json') // for (config.bugchannelid)
      Command = require("../../base/Command.js");
class Bug extends Command {
	constructor(client) {
		super(client, {
			name: "bug",
			description: "report a bug",
			usage: ".bugs",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["bug", "bugs"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    if (!args[0]) return message.reply("Please specify the bug. Example:\n`.meme isn't working.`");
    if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`.meme isn't working.`");
    args = args.join(" ");
    message.reply("Thanks for submitting a bug!");
    const content = `<@627459424461783040>\n**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.cache.get(config.bugchannelid).send(content)
	}
};

module.exports = Bug;
