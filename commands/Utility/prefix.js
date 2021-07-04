const Discord = require('discord.js'),
      prefixes = require('../../data/prefixes.json'),
      config = require('../../config.json'),
      fs = require('fs'),
      Command = require("../../base/Command.js");

async function jsonsearch(k, a) {
    for (var i=0; i < a.length; i++) {
        if (a[i].id === k) {
            return a[i];
        }
    }
    return -1;
}

class Prefix extends Command {
	constructor(client) {
		super(client, {
			name: "prefix",
			description: "i think it dosen't work",
			usage: ".prefix prefix",
			dirname: __dirname,
			enabled: false,
			guildOnly: true,
			aliases: [],
			memberPermissions: ["MANAGE_CHANNELS"],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    let pr = fs.readFileSync('../../prefixes.json', {encoding:'utf8', flag:'r'}); 
    let sp = await jsonsearch(message.guild.id, pr)
    if(!args[0]) {
      if (sp) {
            var cp = sp.prefixes
        } else {
            var cp = [client.config.prefix]
        }
      let mp = (cp.length>1) ? `My prefixes for this server are ${cp}` : `My prefix for this server is ${cp}`;
      if(message.content == `<@${client.user.id}>`||message.content == `<@!${client.user.id}>`) return message.reply(mp);
    } else {
      if (sp == -1) {
        var server = {
          "id": String(message.guild.id),
          "prefixes": [args.join(" ")]
        }
        prefixes.push(server)
      } else {
        var server = {
          "id": String(message.guild.id),
          "prefixes": [args.join(" ")]
        }
        delete prefixes[sp];
        prefixes.push(server)
      }
      fs.writeFileSync('../../prefixes.json', JSON.stringify(prefixes))
    }
  };
};

module.exports = Prefix;
