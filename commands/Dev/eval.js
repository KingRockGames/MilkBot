const Discord = require('discord.js');
      Command = require("../../base/Command.js");
      util = require("util")
class Eval extends Command {
	constructor(client) {
		super(client, {
			name: "eval",
			description: "Evaluation: your dick is small",
			usage: ".eval code",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["evaluate"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: true
		});
	}

	async run(message, args, client) {
   

		const code = args.join(" ");
		let evaled = eval(code);
  
		if (typeof evaled !== "string")
		  evaled = require("util").inspect(evaled);
  
		message.channel.send(evaled);
      }
    
	
};

module.exports = Eval;
