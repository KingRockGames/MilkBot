const Discord = require("discord.js");
const Command = require("../../base/Command.js");
const db = require("quick.db")
class warns extends Command {
	constructor(client) {
		super(client, {
			name: "warns",
			description: "see your warns",
			usage: ".warns [user]",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["warn"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(`${user} have **${warnings}** warning(s)`)
        
	}
};

module.exports = warns;