//const phrase = args.join(' ');
//if (!/[\sa-z]+/i.test(phrase)) return message.channel.send('You need to choose something to bring!');

//for (let i = 1; i < phrase.length; i += 1) {
  //if (phrase.charAt(i).toLowerCase() === phrase.charAt(i - 1).toLowerCase()) {
    //return message.channel.send(`Yes, you can bring ${phrase} through the Green Glass Doors.`);
  //}
//}

//return message.channel.send(`No, you cannot bring ${phrase} through the Green Glass Doors.`);
//},
const Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class greenglassdoors extends Command {
	constructor(client) {
		super(client, {
			name: "greenglassdoors",
			description: "Tells if you can bring an item through the green glass doors.",
			usage: ".greenglassdoors [word]",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["greenglassdoors", "ggd"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        
        
        const phrase = args.join(' ');
    if (!/[\sa-z]+/i.test(phrase)) return message.channel.send('You need to choose something to bring!');

    for (let i = 1; i < phrase.length; i += 1) {
      if (phrase.charAt(i).toLowerCase() === phrase.charAt(i - 1).toLowerCase()) {
        return message.channel.send(`Yes, you can bring ${phrase} through the Green Glass Doors.`);
      }
    }

    return message.channel.send(`No, you cannot bring ${phrase} through the Green Glass Doors.`);
	}
};

module.exports = greenglassdoors;