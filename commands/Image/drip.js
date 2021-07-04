///drip
const { MessageAttachment } = require('discord.js')
const Command = require("../../base/Command.js");

class drip extends Command {
	constructor(client) {
		super(client, {
			name: "drip",
			description: "my boi got some drip",
			usage: ".drip @user",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["drip"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}
    async run(message, args, client) {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()

	.setImage(encodeURI(`https://vacefron.nl/api/drip?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
    }
};

module.exports = drip;