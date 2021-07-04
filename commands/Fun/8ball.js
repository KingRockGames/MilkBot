const Discord = require("discord.js");
const eightballresponses = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes, definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Ask again later",
	"Better not tell you now",
	"Maybe",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
	"OH GOD NO",
	"OH HELL NO"
]
const Command = require("../../base/Command.js");
class Eightball extends Command {
	constructor(client) {
		super(client, {
			name: "8ball",
			description: "Play 8ball",
			usage: ".8ball [random word]",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["8b"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
	  if(!args[0]){
			message.channel.send('Please ask a question.')
		} else {
		let randomcolor = ((1 << 24) * Math.random() | 0).toString(16)
		const AwnserEmbed = new Discord.MessageEmbed()
			.addField(message.author.username + ' asked:', args.join(' '))
			.addField("Bot answer:", (eightballresponses[Math.floor(Math.random() * eightballresponses.length)]))
			
			message.channel.send(AwnserEmbed)
		}
       }
};

module.exports = Eightball;
