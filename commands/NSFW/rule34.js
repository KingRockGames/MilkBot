const redditImageFetcher = require("reddit-image-fetcher"),
      Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class rule extends Command {
	constructor(client) {
		super(client, {
			name: "rule34",
			description: "nice rule34 ",
			usage: ".rule34",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: true,
			devOnly: false
		});
	}

	async run(message, args, client) {
	    redditImageFetcher
    .fetch({
      type: "custom",
      total: 1,
      subreddit: ["r/rule34", "r/hentai"],
    })
    .then((result) => {
      const res = JSON.parse(
        JSON.stringify(result).substring(1, JSON.stringify(result).length - 1)
      );
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(res.image)
        .setURL(`https://reddit.com/r/${res.subreddit}`)
        .setTitle(`here is some rule34 from r/${res.subreddit}`)
        
      message.channel.send(embed);
    });
	}
};

module.exports = rule;