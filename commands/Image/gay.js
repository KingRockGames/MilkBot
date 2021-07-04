const { MessageAttachment } = require('discord.js')
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class gay extends Command {
	constructor(client) {
		super(client, {
			name: "gay",
			description: "make some one gay for a joke",
			usage: ".gay @user",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["gay"],
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
              'https://some-random-api.ml/canvas/gay?avatar='
              + member.user.displayAvatarURL({format: 'png', size: 1024})
              , name: 'gay.png'
            }
          ]
        })
    }
};

module.exports = gay;