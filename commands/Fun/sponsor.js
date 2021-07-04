const Discord = require("discord.js");
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class Sponsor extends Command {
	constructor(client) {
		super(client, {
			name: "sponsor",
			description: "fake sponsor",
			usage: ".sponsor",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["sponsor"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    const embed = new Discord.MessageEmbed()
    .setTitle('A word form our sponsor... [note this is a meme it is not real]')
    .setDescription('A quick message from our sponsor RAID: SHADOW LEGENDS. RAID Shadow Legends™️ is an immersive online experience with everything youd expect from a brand new RPG title. Its got an amazing storyline, awesome 3D graphics, giant boss fights, PVP battles, and hundreds of never before seen champions to collect and customize. I never expected to get this level of performance out of a mobile game. Look how crazy the level of detail is on these champions! RAID: Shadow Legends™️ is getting big real fast, so you should definitely get in early. Starting now will give you a huge head start. Theres also an upcoming Special Launch Tournament with crazy prizes! And not to mention, this game is absolutely free! So go ahead and check out RAID: SHADOW LEGENDS. Using the special code "Siege", you can get 50,000 Silver immediately, and a FREE Epic Level Champion as part of the new players program, courtesy of course of the RAID: Shadow Legends™️ devs.')
    message.channel.send(embed)
	}
};

module.exports = Sponsor;