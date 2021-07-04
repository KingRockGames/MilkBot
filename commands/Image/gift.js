const Discord = require("discord.js");
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class Gift extends Command {
	constructor(client) {
		super(client, {
			name: "gift",
			description: "give a gift",
			usage: ".gift @user",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["gift"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
	  const gif = [
      "https://th.bing.com/th/id/OIP.zHvQkQow4OOJKKPWWqDrogAAAA?w=176&h=189&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.SOZWN1wC1pFfqEEVJ2KaYgHaHa?w=163&h=180&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.lmiGor44sXFQmnoQ8mdCgQHaHa?w=163&h=180&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.QbYo3zcLpLvozS5IyOsKSAHaId?w=157&h=180&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.BbJMeK1iNl0lCowYp7OzJADkER?w=157&h=189&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.ltrPrdTSJAUXERUdTuqh8gHaE8?w=283&h=189&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.yLFaB8neEjcvkibnTbP4KwHaHa?w=188&h=189&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.v5Pgn_2EbcwenoNcH32WhwHaIX?w=140&h=180&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.wgwvPYdnRPIfunukYHzlDAHaHa?w=180&h=180&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.Ptauhtz_v_ZZXsMHw2KI9QAAAA?w=187&h=180&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.2d4YL6GGAcTjFkDmz529egHaFC?w=246&h=180&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.YHScSDd18buxaAL7oxum8AHaHa?w=185&h=185&c=7&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.xDwCQyillPH-2e4feSQfvAHaHa?w=174&h=187&c=7&o=5&pid=1.7",
  ];
    const result = Math.floor(Math.random() * gif.length);
    let mention = message.mentions.members.first();
    if (!mention) {
      message.reply("You need to mention someone!");
    }
    const embed = {
      footer: {
        text: `@${message.guild.member(message.author).displayName} gives @${
          message.guild.member(mention.user).displayName
        } a gift...`,
      },
      
      image: {
        url: `${gif[result]}`,
      },
    };
    message.channel.send({ embed });
	}
};

module.exports = Gift;