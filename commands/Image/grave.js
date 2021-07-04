const { MessageAttachment } = require('discord.js')
const Command = require("../../base/Command.js");

class grave extends Command {
	constructor(client) {
		super(client, {
			name: "grave",
			description: "RIP MY BOI",
			usage: ".grave @user",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["grave", "gv", "rip"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}
    async run(message, args, client) {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setImage(encodeURI(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
    }
};

module.exports = grave;