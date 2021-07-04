const Discord = require("discord.js"),
       api = require('covidapi'),
      Command = require("../../base/Command.js");
class Covid extends Command {
	constructor(client) {
		super(client, {
			name: "covid",
			description: "View Information On Covid-19",
			usage: ".covid",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["covid19", "c19", "corona", "coronavirus", "c-19", "covid-19"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    const data = await api.all()
    const embed = new Discord.MessageEmbed()
      .setTitle('NOTE this is world wide only')
      .addField("🤧Cases🤧", data.cases)
      .addField("☠️Deaths☠️", data.deaths)
      .addField("🙂Recovered🙂", data.recovered)
      
    message.channel.send(embed)
	}
};

module.exports = Covid;
