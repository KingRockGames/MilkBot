const Discord = require("discord.js");
const Command = require("../../base/Command.js");

function ts() {
        var date = new Date();
        return date.getTime();
}
class shardinfo extends Command {
	constructor(client) {
		super(client, {
			name: "shardinfo",
			description: "see shardinfo",
			usage: ".shardinfo",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["shards"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
		
		let values = await client.shard.broadcastEval(`
		[
			this.shard.ids,
			this.guilds.cache.size,
			this.users.cache.size
		]
	`);
	// Make a final string which will be sent in the channel
	let finalString = "**SHARD STATUS**\n\n";
	// For each shard data
	values.forEach((value) => {
		// Add the shard infos to the final string
		finalString += "• SHARD #"+value[0]+" | ServerCount: "+value[1]+" | UserCount: "+value[2]+"\n";
	});
	// Send the final string in the channel
	message.channel.send(finalString);
	}
};

module.exports = shardinfo; 
