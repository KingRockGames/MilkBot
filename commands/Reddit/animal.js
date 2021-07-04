const redditImageFetcher = require("reddit-image-fetcher"),
      Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class Animal extends Command {
	constructor(client) {
		super(client, {
			name: "animal",
			description: "\*animal noises\*",
			usage: "s?animal",
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
	    redditImageFetcher
    .fetch({
      type: "custom",
      total: 1,
      subreddit: [ "dogpictures", "puppies", "Aww", "Sneks", "RarePuppers", "TheCatDimension", "AnimalsBeingJerks", "cats"],
    })
    .then((result) => {
      const res = JSON.parse(
        JSON.stringify(result).substring(1, JSON.stringify(result).length - 1)
      );
      const embed = new Discord.MessageEmbed()
        .setImage(res.image)
        .setURL(`https://reddit.com/r/${res.subreddit}`)
        .setTitle(`here is a animal from r/${res.subreddit}`)
        
      message.channel.send(embed);
    });
	}
};

module.exports = Animal;
