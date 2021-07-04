const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class Embed extends Command {
	constructor(client) {
		super(client, {
			name: "embed",
			description: "embed a message",
			usage: ".embed message",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["emb"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
	    const text =message.content.split(" ").slice(1).join(' ')
        if (!text) return message.channel.send('what do you want to embed')
         const embed = new Discord.MessageEmbed()
        .setDescription(text)
        .setFooter(`${message.author.username} - 2021`);
        message.channel.send(embed)
        message.delete()
	}
};

module.exports = Embed;
