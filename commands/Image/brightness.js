const { MessageAttachment } = require('discord.js')
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class brightness extends Command {
	constructor(client) {
		super(client, {
			name: "brightness",
			description: "give a image brightness",
			usage: ".brightness",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["brightness", "bright"],
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
              'https://some-random-api.ml/canvas/brightness?avatar='
              + member.user.displayAvatarURL({format: 'png', size: 1024})
              , name: 'brightness.png'
            }
          ]
        })
    }
};

module.exports = brightness;