const Discord = require("discord.js"),
    Command = require("../../base/Command.js"),
    
    fs = require("fs");
    async function jsonsearch(k, a) {
        for (var i=0; i < a.length; i++) {
            if (a[i].id === k) {
                return a[i];
            }
        }
        return -1;
    }
class help extends Command {
	constructor(client) {
		super(client, {
			name: "help",
			description: "need some help here!",
			usage: ".help",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["helpme"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
        let pr = fs.readFileSync('./data/prefixes.json', {encoding:'utf8', flag:'r'}); 
        let sp = await jsonsearch(message.guild.id, pr)
        if(!args[0]) {
          if (sp) {
                var cp = sp.prefixes
            } else {
                var cp = [client.config.prefix]
            }
          
          
        }
		var cat = String(args[0]).toLowerCase()
		if(cat == "moderation") cat = "mod"
		if(String(args[0]) == ""|| typeof String(args[0])=="undefined" ||!args[0]) cat = "main"
		if(cat == "miscellaneous") cat = "misc"
		if(cat!=="economy"&&cat!=="main"&&cat!=="utility"&&cat!=="mod"&&cat!=="fun"&&cat!=="image"&&cat!=="misc"&&cat!=="reddit"&&cat!=="dev"&&cat!=="games"&&cat!=="config") cat = "else"
		switch (cat) {
			case "main":
				const main = new Discord.MessageEmbed()
					.setTitle(".help")
					.setColor("GREEN")
					.addFields({ name: "**Utility**", value: `\`.help utility\`` })
					.addFields({ name: "**Fun**", value: `\`.help fun\``  })
					.addFields({ name: "**Games**", value: `\`.help games\``  })
                    .addFields({ name: "**Image**", value: `\`.help image\`` })
					.addFields({ name: "**Reddit**", value: `\`.help reddit\`` })
					.addFields({ name: "**Miscellaneous**", value:`\`help misc\`` })
					
					.addFields({ name: "**Moderation**", value: `\`help moderation\`` })
				return message.channel.send(main);
			case "utility":
				const utility = new Discord.MessageEmbed()
					.setTitle("Utility Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'Utility'  && c.conf.enabled).each(c => {
					 utility.addFields({name: `__.**${c.help.name}**__`,value:`${c.help.description}\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(utility);
			case "fun":
				const fun = new Discord.MessageEmbed()
					.setTitle("Fun Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'Fun'  && c.conf.enabled).each(c => {
					 fun.addFields({name: `__.**${c.help.name}**__`,value:`${c.help.description}\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(fun);
			case "image":
				const image = new Discord.MessageEmbed()
					.setTitle("Image Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'Image'  && c.conf.enabled).each(c => {
                    image.addFields({name: `__.**${c.help.name}**__`,value:`*${c.help.description}*\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(image);
			case "reddit":
				const reddit = new Discord.MessageEmbed()
					.setTitle("Reddit Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'Reddit'  && c.conf.enabled).each(c => {
                    reddit.addFields({name: `__.**${c.help.name}**__`,value:`*${c.help.description}*\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(reddit);
			case "mod":
				const mod = new Discord.MessageEmbed()
					.setTitle("Moderation Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'Moderation'  && c.conf.enabled).each(c => {
					 mod.addFields({name: `__.**${c.help.name}**__`,value:`*${c.help.description}*\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(mod);
			case "misc":
				const misc = new Discord.MessageEmbed()
					.setTitle("Miscellaneous Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'Misc' && c.conf.enabled).each(c => {
					 misc.addFields({name: `__.**${c.help.name}**__`,value:`*${c.help.description}*\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(misc);
				case "config":
				const config = new Discord.MessageEmbed()
					.setTitle("Config Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'Config' && c.conf.enabled).each(c => {
					config.addFields({name: `__.**${c.help.name}**__`,value:`*${c.help.description}*\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(config);
             case "dev":
				const dev = new Discord.MessageEmbed()
					.setTitle("Dev Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'Dev' && c.conf.enabled).each(c => {
                    dev.addFields({name: `__.**${c.help.name}**__`,value:`*${c.help.description}*\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(dev);
				case "nsfw":
				const nsfw = new Discord.MessageEmbed()
					.setTitle("nsfw Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'NSFW' && c.conf.enabled).each(c => {
                    nsfw.addFields({name: `__.**${c.help.name}**__`,value:`*${c.help.description}*\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(nsfw);
				case "games":
				const games = new Discord.MessageEmbed()
					.setTitle("Game Commands")
					.setColor("GREEN")
				client.commands.filter(c => c.help.category == 'Games' && c.conf.enabled).each(c => {
                    games.addFields({name: `__.**${c.help.name}**__`,value:`*${c.help.description}*\nUsage: ${c.help.usage}`,})
				})
				return message.channel.send(games);
			case "else":
				let elsecmd = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));
				if(typeof elsecmd == "undefined") {
					const nocmd = new Discord.MessageEmbed()
						.setTitle(`Couldn't Find The ${args[0]} Command...`)
						.setColor(client.colors.red)
					return message.channel.send(nocmd);
				}
				const elses = new Discord.MessageEmbed()
					.setTitle(`**__.${elsecmd.help.name}__**`)
					.setColor("GREEN")
					.setDescription(`${elsecmd.help.description}`)
					.setImage('https://i.imgur.com/YMrQZVP.png')
					.addFields({name: `**Usage:** ${elsecmd.help.usage}`,value:`\u200b`,})
					.addFields({name: `**Category:** ${elsecmd.help.category}`,value:`\u200b`,})
				return message.channel.send(elses);
		}
	}
};

module.exports = help;