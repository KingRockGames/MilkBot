const redditImageFetcher = require("reddit-image-fetcher"),
      Discord = require("discord.js"),
      Command = require("../../base/Command.js");
class Meme extends Command {
	constructor(client) {
		super(client, {
			name: "meme",
			description: "nice memes ",
			usage: ".meme",
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
      subreddit: [ "memes", "meme", "meirl", "im14andthisisdeep", "ihadastroke", "ComedyCemetery", "teenagers", "comedyheaven", "Facepalm", "CrappyDesign", "MomentsBeforeDisaster", "cursedcomments", "cursedimages", "Blessed_Images", "blursedimages", "hmmm", "HolUp", "madlads", "softwaregore", "technicallythetruth", "NoahGetTheBoat", "MakeMeSuffer", "birdswitharms", "mildlyinteresting", "mildlyinfuriating"],
    })
    .then((result) => {
      const res = JSON.parse(
        JSON.stringify(result).substring(1, JSON.stringify(result).length - 1)
      );
      const embed = new Discord.MessageEmbed()
        .setTitle(res.title)
        .setImage(res.image)
        .setURL(`https://reddit.com/r/${res.subreddit}`)
        .setTitle(`This is so cool and it's from r/${res.subreddit}`)
        
      message.channel.send(embed);
    });
	}
};

module.exports = Meme;