const Discord = require("discord.js");

const Command = require("../../base/Command.js");
class achievement extends Command {
	constructor(client) {
		super(client, {
			name: "achievement",
			description: "get a Minecraft achievement",
			usage: ".achievement [random word]",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["achievement", "achieve"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        
        const text =message.content.split(" ").slice(1).join(' ')
        if (!text) return message.channel.send('Put some text')
         const embed = new Discord.MessageEmbed()
        .setImage('https://minecraftskinstealer.com/achievement/18/Achievement+Get%21/' + text)
        message.channel.send(embed)
       }
};

module.exports = achievement;