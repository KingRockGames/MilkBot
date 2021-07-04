const { MessageEmbed } = require('discord.js'),
    config = require('../../config.json'),
    bal = require('../../balance.json'),
    works = require('../../works.json'),
    fs = require('fs'),
    Jwork = require('../../work.json'),
    JworkR = Jwork[Math.floor(Math.random() * Jwork.length)]
class work extends Command {
	constructor(client) {
		super(client, {
			name: "work",
			description: "work for me and make milk coins",
			usage: ".work",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["work"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
            devOnly: false,
            cooldown: 10
		});
	}

	async run(message, args, client) {
        if (!bal[message.author.id]) bal[message.author.id] = {
            balance: 0,
        };
        if (!works[message.author.id]) works[message.author.id] = {
            work: 0,
        };
        var curBal = bal[message.author.id].balance,
            curWork = works[message.author.id].work;
        
        bal[message.author.id].balance = curBal + Math.floor(Math.random() * 600) + 3;
        works[message.author.id].work = curWork + 1;
    
        try {
            fs.writeFileSync('works.json', JSON.stringify(works))
            fs.writeFileSync('balance.json', JSON.stringify(bal))
        } catch (e) {
            return console.error(e)
        }
        let embed = new MessageEmbed()
            .setDescription(`**\💼 | ${message.author.username}**, ${JworkR} **${bal[message.author.id].balance - curBal}** Milk coins`)
        message.channel.send(embed);
  }
};

module.exports = work;