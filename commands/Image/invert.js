const { MessageAttachment } = require('discord.js')
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class invert extends Command {
	constructor(client) {
		super(client, {
			name: "invert",
			description: "invert a image",
			usage: ".invert @user",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["invert"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}
    async run(message, args, client) {
        const match = message.content.match(/\d{17,19}/);

        let member = match
                    ? await message.guild.members.fetch(match[0]).catch(()=> null)
                    : null
    
        if (!member)
          return message.channel.send('who?')
    
        return message.channel.send({
          files: [
            {
              attachment:
              'https://some-random-api.ml/canvas/invert?avatar='
              + member.user.displayAvatarURL({format: 'png', size: 1024})
              , name: 'inverted.png'
            }
          ]
        })
    }
};

module.exports = invert;