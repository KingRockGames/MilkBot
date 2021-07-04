//firsttime
const { MessageAttachment } = require('discord.js')
const Command = require("../../base/Command.js");

class firsttime extends Command {
	constructor(client) {
		super(client, {
			name: "firsttime",
			description: "first time",
			usage: ".firsttime @user",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["firsttime"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}
    async run(message, args, client) {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()

	.setImage(encodeURI(`https://vacefron.nl/api/firsttime?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
    }
};

module.exports = firsttime;