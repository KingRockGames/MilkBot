const Discord = require("discord.js");
const Command = require("../../base/Command.js");
const db = require("quick.db")
class rank extends Command {
	constructor(client) {
		super(client, {
			name: "rank",
			description: "see your rank",
			usage: ".rank [user]",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["rank", "level", "lvl"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
        let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)
    
        if(messagefetch == null) messagefetch = '0';
        if(levelfetch == null) levelfetch = '0';
    
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, You Are Level: \`${levelfetch}\` & Have Sent: \`${messagefetch}\` Messages`)
    
        message.channel.send(embed)
        
	}
};

module.exports = rank;