const path = require("path");

module.exports = class Command {
	constructor(
		client,
		{
			name = null,
			description = "No description provided",
			usage = "No usage provided",
			dirname = false,
			example = null,
			enabled = true,
			guildOnly = false,
			devOnly = false,
			aliases = new Array(),
			nsfw = false,
			memberPermissions = new Array(),
			botPermissions = new Array(),
		}
	) {
		let category = dirname ? dirname.split(path.sep)[parseInt(dirname.split(path.sep).length - 1, 10)] : "Other";
		this.client = client;
		this.conf = { enabled, guildOnly, devOnly, aliases, nsfw, memberPermissions, botPermissions };
		this.help = { name, description, category, usage, example };
	}
};
