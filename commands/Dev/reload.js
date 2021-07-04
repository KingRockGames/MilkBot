const Discord = require("discord.js");
const Command = require("../../base/Command.js");
class Reload extends Command {
	constructor(client) {
		super(client, {
			name: "reload",
			description: "reload a command",
			usage: ".reload command",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: true
		});
	}
	async run(message, args, client) {
           const cmd = client.commands.get(args[0])
	   if(!args[0]) return message.reply('Please Specify a Command!')
           if(!cmd||typeof cmd == 'undefined') return message.reply("I couldn't find that command...")
           const cmdname = cmd.help.name
           const cmdcat = cmd.help.category
           try {
             client.unloadCommand(`./commands/${cmdcat}`, cmdname)
             client.loadCommand(`./commands/${cmdcat}`, cmdname)
             client.log(`${cmdname} Command Reloaded by ${message.author.tag}!`)
             message.channel.send(`${cmdname} Command has been reloaded!`)
           } catch (e) {
             message.reply(e)
           }
        
	}
};

module.exports = Reload;