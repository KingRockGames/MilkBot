const Discord = require("discord.js");
const fs = require('fs');
const osutils = require('os-utils');
const Command = require("../../base/Command.js");
const version = client.config.V
class Botinfo extends Command {
	constructor(client) {
		super(client, {
			name: "botinfo",
			description: "get info about the bot",
			usage: ".botinfo",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["info", "bot", "information"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    
   
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    
    
        osutils.cpuUsage(function(v) {
          const embed = new Discord.MessageEmbed()
          .setThumbnail(client.user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
          .setURL(client.user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
          .setTimestamp()
          .addField(`Milk Bot v2.0.1`, "Show the bot's stats.")
          .addField("-------------------------------------------------------------------------------","----------------------------------------------------------------------------")
          .addField("Server Prefix", `**.**`, true)
          .addField("Global Prefix", `**.**`, true)
          .addField("Total Commands", `${0} commands`, true)
          .addField("Total Servers", `${client.guilds.cache.size}`, true)
          .addField("Total Channels", `${client.channels.cache.size}`, true)
          .addField("Total Users", `${client.users.cache.size}`, true)
          .addField("Bot Version", "v2.0.1", true)
          .addField("Library", "Discord.js v12", true)
          .addField("Developer", `Milk Man UwU#0001`, true)
          .addField("-------------------------------------------------------------------------------","----------------------------------------------------------------------------")
          .addField("Platform", osutils.platform(),true)
          .addField("VPS CPU Cores", osutils.cpuCount() + " Cores",true)
          .addField("CPU Usage", `${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}%`,true)
          .addField("Total Memory", osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1] + "MB",true)
          .addField("RAM Usage Of VPS", `${(osutils.totalmem() - osutils.freemem()).toString().split(".")[0] + "." + ( osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split('')[0] + (osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split('')[1]}/${osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1]}MB`,true)
          .addField("RAM Usage Of Bot", (process.memoryUsage().heapUsed / 1024 / 1024 ).toFixed(2) + "MB/" + osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1] + "MB",true)
          .addField("Shard", `**${message.guild.shard.id}**`,true)
          .addField("Ping", Math.round(client.ws.ping) + "ms", true)
          .addField("Uptime", `${days}d ${hours}h ${minutes}m ${seconds}s`, true)
          .setFooter(`Milk Bot by TAKiKA#8041`);
          message.channel.send({embed});
        })
      
    
	}
};

module.exports = Botinfo;
 //7708