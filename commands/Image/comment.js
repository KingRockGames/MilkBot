const { MessageAttachment } = require('discord.js')
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class comment extends Command {
	constructor(client) {
		super(client, {
			name: "comment",
			description: "make a comment",
			usage: ".comment",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["comment"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        if (!args || !args.join(' ').replace(/(<(|a):(\w{1,32})?:(\d{17,19})>)/g,''))
        return message.channel.send('Yes, but where\'s your comment?')
  
      return message.channel.send({
        files: [
          {
            attachment:
            'https://some-random-api.ml/canvas/youtube-comment?avatar='
            + message.author.displayAvatarURL({format: 'png', size: 1024})
            + '&username='
            + encodeURI(message.member.displayName)
            + '&comment='
            + encodeURI(args.join(' ').replace(/(<(|a):(\w{1,32})?:(\d{17,19})>)/g,''))
            , name: 'eiyuutubu.png'
          }
        ]
      })
	}
};

module.exports = comment;