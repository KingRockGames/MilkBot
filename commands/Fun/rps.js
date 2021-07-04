const Discord = require("discord.js"),
	  Command = require("../../base/Command.js");
	  let rps = ["**:pencil: paper**", "**:moyai: rock**", "**:scissors: scissors**"];
      function random() { return `${rps[Math.floor(Math.random() * Math.floor(2))]}!` }
class rpsss extends Command {
	constructor(client) {
		super(client, {
			name: "rps",
			description: "play rps",
			usage: ".rps",
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
        let choice = args.join(" ").toLowerCase();
        if (choice === '') return message.reply("Please specify either rock, paper or scissors.");
        if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return message.reply(`Please specify either rock, paper or scissors. **${choice}** isn't one of those :P`);
        message.reply(random());
	}
};

module.exports = rpsss;