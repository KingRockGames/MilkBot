const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class chatbot extends Command {
	constructor(client) {
		super(client, {
			name: "chatbot",
			description: "learn how to set up the chatbot",
			usage: ".chatbot",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["chatbot"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
	   
         const embed = new Discord.MessageEmbed()
       
        .setDescription('1) How to set it up \n Step 1 Make a channel called **chatbot** not chat-bot, **chatbot** you are done you can now chat with Milk Bot \n\n 2) How to chat with Milk Bot \n 1. you can send a message like "test" and Milk Bot will send a message back you will know if it\'s your message as it will have you message in it \n 2. reply You can use discord reply to chat with Milk Bot')
        
        message.channel.send(embed)
       
	}
};

module.exports = chatbot;