const Discord = require("discord.js");
const Command = require("../../base/Command.js");
let balances = require("../../balance.json");
function ts() {
        var date = new Date();
        return date.getTime();
}
class shop extends Command {
	constructor(client) {
		super(client, {
			name: "shop",
			description: "get a users shop",
			usage: ".shop ",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["shop"],
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
         
        let uBalance = balances[member.id].balance;
        const embed = new Discord.MessageEmbed()
        .setDescription(`Welcome to Milk Shop:tm:\n You can spend your Milk Coins here\n DM @Lamaker's Only Son#1234 to buy anything \n **GET 20% OFF ANY ITEM WHEN MY BUY MORE THEN 1**`)
        .addField("Custom Server Badge", "Cost: 10000 Milk Coins \n Max: 3 \n Giftable: Yes")
        .addField("Custom User Badge", "Cost: 1000 Milk Coins \n Max: 2 \n Giftable: Yes")
        .addField("Custom Command", "Cost: 100000 Milk Coins \n Max: 2 \n Giftable: No")
        .addField("Custom Level Background", "Cost: SOON:tm: Milk Coins \n Max: 1 \n Giftable: SOON:tm:")
        message.channel.send(embed)
         
  }
};

module.exports = shop;
// message.channel.send(`**${member.username}** you have **${uBalance}** Milk coins`);