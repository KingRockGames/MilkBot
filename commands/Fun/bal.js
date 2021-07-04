const Discord = require("discord.js");
const Command = require("../../base/Command.js");
let balances = require("../../balance.json");
function ts() {
        var date = new Date();
        return date.getTime();
}
class balance extends Command {
	constructor(client) {
		super(client, {
			name: "balance",
			description: "get a users balance",
			usage: ".balance @user",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["balance", "bal"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        let member = message.mentions.users.first()
        if (!member) member = message.author;
        if (member.bot) return message.channel.send(`**${message.author.username}**, Bot's don't have a balance!`);
        //!coins
        //WAJIB biar ga undefined
        if(!balance[member.id]){
          balance[member.id] = {
          balance: 0
          };
        }
        //wajib biar ga undefined
        if(!balance[member.id]){
        balance[member.id] = {
          balance: 0
        };
        }
        //buat read json  
        let uBalance = balances[member.id].balance;
        if (uBalance == 0) {
          message.channel.send(`**${member.username} do not have a balance yet!**`);
        } else {
        message.channel.send(`**${member.username}** you have **${uBalance}** Milk coins`);
        }
  }
};

module.exports = balance;