const Discord = require("discord.js");
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class Support extends Command {
	constructor(client) {
		super(client, {
			name: "support",
			description: "get Support",
			usage: ".support",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        let invite = new Discord.MessageEmbed()
            .setTitle("Support Link!")
            .addField("Support Server", "[Click to join support Server](https://discord.gg/Wuq9qbr)")
            .setTimestamp()
            
        message.channel.send(invite);
	}
};

module.exports = Support;
