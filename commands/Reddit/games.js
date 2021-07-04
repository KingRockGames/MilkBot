const redditImageFetcher = require("reddit-image-fetcher"),
 Discord = require("discord.js");
 Command = require("../../base/Command.js");

 const eightballresponses = [
	"Oh That's cool ",
	"OMG SO COOOOL ",
	"Nice ", 
	"EPIC ",
	"WOW "
]
class Ping extends Command {
	constructor(client) {
		super(client, {
			name: "games",
			description: "games",
			usage: ".games",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["game", "games"],
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
		  subreddit: [ "Minecraft", "AmongUs", "FallGuysGame", "Pokemon", "fivenightsatfreddys", "RocketLeague", "StardewValley", "tf2", "PS4", "xboxone", "skyrim", "smashbros"],
		})
		.then((result) => {
		  const res = JSON.parse(
			JSON.stringify(result).substring(1, JSON.stringify(result).length - 1)
		  );
		  const embed = new Discord.MessageEmbed()
			.setImage(res.image)
			.setURL(`https://reddit.com/r/${res.subreddit}`)
			.setTitle((eightballresponses[Math.floor(Math.random() * eightballresponses.length)]) + `it's from r/${res.subreddit}`)
			
		  message.channel.send(embed);
		});
	}
};

module.exports = Ping;
