const Discord = require("discord.js");
const Command = require("../../base/Command.js");
class ban extends Command {
	constructor(client) {
		super(client, {
			name: "ban",
			description: "When you kick them but they come back",
			usage: ".ban user reason",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["ban"],
			memberPermissions: ["BAN_MEMBERS"],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
		if(message.channel.type == 'DM') return message.reply('You can use this command only in servers');
	var user = message.mentions.users.first();
	const banReason = args.slice(1).join(' ');
	if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("You haven't the permission to execute this command!");
	if(!user) {
		try {
			if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\'t get a Discord user with this userID!');
			user = message.guild.members.get(args.slice(0, 1).join(' '));
			user = user.user;
		} catch (error) {
			return message.reply('Couldn\'t get a Discord user with this userID!');
		}
	}
	if (user === message.author) return message.channel.send('You can\'t ban yourself');
    if (!banReason) return message.reply('You forgot to enter a reason for this ban!');
    message.guild.members.ban(user, { reason: banReason });
	const Discord = require('discord.js');
	const banConfirm = new Discord.MessageEmbed()
	.setDescription(`✅ ${user.tag} has been successfully banned!\nReason: __${banReason}__`);
	message.channel.send(banConfirm);
	}
};

module.exports = ban;
