const { Client, Collection, MessageEmbed, WebhookClient } = require("discord.js"),
      fs = require("fs"),
      config = require("../config.json"),
      prefixes = require("../data/prefixes.json");
      Discord = require("discord.js")
// ==========================================================================================
// Functions

module.exports = class {
	constructor(client) {
		this.client = client;
	}

	async run(message) {
		const client = this.client;
		async function jsonsearch(k, a) {
		    for (var i=0; i < a.length; i++) {
			if (a[i].id === k) {
			    return a[i];
			}
		    }
		}
		// Ignore all bots
		if (message.author.bot) return;

		// Get An Array of Valid Prefixes
		let sp = await jsonsearch(message.guild.id, prefixes);

		// If prefix Doesn't Exist Set it to Default
		if (sp) {
		    var cp = sp.prefixes
		} else {
		    var cp = config.prefix
		}

		// If No Prefixes Exist
			if (!cp) return;

		// Mention Prefix
		let mp = (cp.length>1) ? `My prefixes for this server are ${cp}` : `My prefix for this server is ${cp}`;
			if(message.content == `<@${client.user.id}>`||message.content == `<@!${client.user.id}>`) return message.reply(mp);

		// Get Prefix Used if There Are Multiple
		var prefix;
		for(var i=0; i<cp.length; cp++) {
		    if(message.content.startsWith(cp[i])) prefix = cp[i];
		}

		// args
			let args = message.content
				.slice(typeof prefix === "string" ? prefix.length : 0)
				.trim()
				.split(/ +/g);

		// Command
			let command = Array(args.shift())[0].toLowerCase();

		// Ignore if no Command
		if(!String(String(message.content).toLowerCase()).startsWith(prefix + command)) return;

			let cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

		// Ignore if no Command x2 (just in case)
			if (!cmd) return;

			if (!cmd.conf.enabled) return message.channel.send(`This command is disabled...`);
			if (cmd.conf.guildOnly && !message.guild) return message.channel.send(`This command is only available on a server!`);
		if (cmd.conf.devOnly && client.devIds.indexOf(message.author.id) == -1) return message.channel.send(`This command is only developer only!`);
			if (cmd.conf.nsfw && !message.channel.nsfw) return message.channel.send("You must be in an NSFW channel to use this!");

			// Check if user is missing perms
			if(!message.member.hasPermission(cmd.conf.memberPermissions)) {
				return message
					.reply(`You don't have the perms to do that...`)
					.then((m) => m.delete({timeout: 5000}))
			}
		try {
		    await cmd.run(message, args, client);
		    const embed = new Discord.MessageEmbed()
					.setDescription(`**Server:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**Command:** ${command}\n**Content:** ${message.content}\n[Jump to](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})\n**Username:** ${message.author.username}\n**User ID:** ${message.author.id}`)
				    .setColor("GREEN")
		    client.consolehook.send(embed);
			console.log(`Command:\nUser: ${message.author.tag}\nCommand: ${command}\nContent: ${message.content}`)
		} catch (e) {
				client.error("An error has occurred", e);
				return message.channel.send(`${e} | An error has occurred, please try again later.`);
		}
	}
}