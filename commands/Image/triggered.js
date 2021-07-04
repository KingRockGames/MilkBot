const { MessageAttachment } = require('discord.js')
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class triggered extends Command {
	constructor(client) {
		super(client, {
			name: "triggered",
			description: "make a user triggered",
			usage: ".triggered @user",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["triggered", "trigger"],
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
              'https://some-random-api.ml/canvas/triggered?avatar='
              + member.user.displayAvatarURL({format: 'png', size: 1024})
              , name: 'triggered.gif'
            }
          ]
        })
    }
};

module.exports = triggered;