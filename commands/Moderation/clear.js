const Discord = require("discord.js");
const Command = require("../../base/Command.js");
class Clear extends Command {
	constructor(client) {
		super(client, {
			name: "clear",
			description: "stop spamming",
			usage: ".clear number",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["clear", "purge"],
			memberPermissions: ["MANAGE_MESSAGES"],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    message.delete()
    let clearamount = args[0];
    if(isNaN(clearamount)) return message.reply(`Please do a number value to clear.`).then(m => (m.delete({timeout: 10000})));
    if(clearamount >= 100) clearamount = 99;
    if(clearamount <= 0) return message.reply(`Please choose a number greater than **0** and less than **1**`)
    message.channel.send(`⚠ Clearing Messages.. Please Wait! ⚠️`).then(msg => msg.delete({timeout: 2000}));
    setTimeout(async () => {
      await message.channel.bulkDelete(clearamount);
    }, 1000)
	}
};

module.exports = Clear;
