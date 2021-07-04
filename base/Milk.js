const { Client, Collection, MessageEmbed, WebhookClient } = require("discord.js"),
      fs = require("fs"),
      util = require("util"),
      path = require("path"),
      
      config = require('../config.json');

class Milk extends Client {
	constructor(options) {
		super(options);
		
		this.config = config;
		
		// ====================================================
		// Variables
		this.commands = new Collection(); // Creates new commands collection
		this.aliases = new Collection(); // Creates new command aliases collection
		this.devIds = [
			"627459424461783040",
			"591179218830753793",
			"660774931365101583"
		];
        this.bugfinderIds = [
			"627459424461783040",
			"709804903358398464"
		];
		this.supportteamIds = [
			"627459424461783040",
			"690745774954250260",
			"709403323920547850",
			"709555346800246855"
			
		];
		this.boostersIds = [
			"627459424461783040",
		];
		this.coolpeopleIds = [
			"627459424461783040",
			"591179218830753793",
			"690745774954250260",
			"709403323920547850",
			"709555346800246855",
			"611165590744203285",
			"618365349984862208",
			"397338324328775680",
			"634493032598601739",
			"707043684889133117"
		];
		this.supportserverIds = [
			"754965974167453737"
		]
		
 
		this.colors = {
			red: "",
			orange: "",
			yellow: "",
			green: "",
			blue: "",
			purple: "",
			pink: "",
		}

		// ====================================================
		// Webhooks

		this.consolehook = new WebhookClient("782617945137872956", "7nFgWJdPL0qEXHtq5sUxjcB8bK_fZRtv49cPe-bi4xuALhE1Shzxm-SfFxUoO3PkLEAL")
        this.newserverhook = new WebhookClient()
		// ====================================================
		// Functions

		
		// --- Chop strings into n sized chunks
		this.chop = function(str, size) {
			if (str == null) return [];
			str = String(str);
			size = ~~size;
			return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
		}
		// ====================================================
		// Logging
		// Just in case

		this.log = async function(msg, options) {
			
			// defaults
			if(typeof options == "null"||typeof options == "undefined") options = {
				title: "Log",
				color: this.colors.blue,
				timestamp: true
			}
			if(typeof options.title == "null"||typeof options.title == "undefined") options.title = "Log"
			if(typeof options.color == "null"||typeof options.color == "undefined") options.color = this.colors.blue
			if(typeof options.timestamp == "null"||typeof options.timestamp == "undefined") options.timestamp = true
			
			console.log(msg)
			const emb = new MessageEmbed()
				.setTitle(options.title)
				.setDescription(msg)
				.setColor(options.color);
			if(options.timestamp) emb.setTimestamp()
			this.consolehook.send("", {
				username: "Milk //Console",
				avatarURL:
					"https://cdn.discordapp.com/avatars/782622012508995624/cae48253ff5ae4e45379be4d0b439a58.webp?size=1024",
				embeds: [emb],
			});
		}
		this.warn = async function(msg) {
			console.log(msg);
			const emb = new MessageEmbed()
				.setTitle("Warning")
				.setDescription(msg)
				.setColor(this.colors.yellow);
			this.consolehook.send("", {
				username: "Milk // Console",
				avatarURL:
					"https://cdn.discordapp.com/avatars/782622012508995624/cae48253ff5ae4e45379be4d0b439a58.webp?size=1024",
				embeds: [emb],
			});
		}
		this.error = async function(e) {
			let err = new MessageEmbed()
				.setTitle(e.name + '\u200b')
				.setDescription(e.message + '\u200b')
				.setColor(this.colors.yellow)
			if(e.stack.length>500) {
				let chopped = this.chop(e.stack, 500)
				err.addFields({name:'Stack Trace', value: chopped[0]})
				this.consolehook.send("", {
					username: "Milk // Console // Error",
					avatarURL:
						"https://cdn.discordapp.com/avatars/782622012508995624/cae48253ff5ae4e45379be4d0b439a58.webp?size=1024",
					embeds: [err],
				});
				chopped.shift()
				var w = 0;
				for(w=0; w<chopped.length; w++) {
					let errr = new MessageEmbed()
					.setColor(this.colors.yellow)
					.addFields({name:'\u200b', value: chopped[0]})
					this.consolehook.send("", {
						username: "Milk // Console // Error",
						avatarURL:
							"https://cdn.discordapp.com/avatars/782622012508995624/cae48253ff5ae4e45379be4d0b439a58.webp?size=1024",
						embeds: [errr],
					});
					chopped.shift()
				}
			} else {
				err.addFields({name:'Stack Trace', value: e.stack})
				this.consolehook.send("", {
					username: "Milk // Console // Error",
					avatarURL:
						"https://cdn.discordapp.com/avatars/782622012508995624/cae48253ff5ae4e45379be4d0b439a58.webp?size=1024",
					embeds: [err],
				});
			}
			console.log(e);
		}
	};
	// ====================================================
	// Functions
	// This function is used to load a command and add it to the collection
	loadCommand(commandPath, commandName) {
		try {
			const props = new (require(`.${commandPath}${path.sep}${commandName}`))(this);
			props.conf.location = commandPath;
			if (props.init) props.init(this);
			this.commands.set(props.help.name, props);
			props.conf.aliases.forEach(alias => this.aliases.set(alias, props.help.name));
			return;
		} catch (e) {
			this.log(`${commandPath}, ${commandName}`);
			this.log(e);
		}
	}

	// This function is used to unload a command
	async unloadCommand(commandPath, commandName) {
		let command;
		if (this.commands.has(commandName)) command = this.commands.get(commandName);
		else if (this.aliases.has(commandName)) command = this.commands.get(this.aliases.get(commandName));
		if (!command) return this.warn(`\`${commandName}\` is not a valid command or alias`);
		// if the command has a "shutdown" script it needs to run before being unloaded
		if (command.shutdown) await command.shutdown(this);
		delete require.cache[require.resolve(`.${commandPath}${path.sep}${commandName}.js`)];
		return;
	};
};


module.exports = Milk;