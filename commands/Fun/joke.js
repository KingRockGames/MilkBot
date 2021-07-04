const giveMeAJoke = require('discord-jokes')
const Discord = require("discord.js");
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class Joke extends Command {
	constructor(client) {
		super(client, {
			name: "joke",
			description: "gives dad joke",
			usage: ".joke",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["jk"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    const embed = new Discord.MessageEmbed()
    giveMeAJoke.getRandomDadJoke (function(joke){
        message.channel.send(joke)
    })
	}
};

module.exports = Joke;