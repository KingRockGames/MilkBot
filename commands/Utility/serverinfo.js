const Discord = require("discord.js"),
	  Command = require("../../base/Command.js");
	  const moment = require('moment');

	  
	
class Serverinfo extends Command {
	constructor(client) {
		super(client, {
			name: "serverinfo",
			description: "view your server information",
			usage: ".serverinfo",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["server", "si"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
	    const channels = message.guild.channels.cache;
		const members = message.guild.members.cache;
		   // milksupport 
		 if (message.guild.id=='754965974167453737') {
			  var flag = " <:Supportserver1:803493337608486942> "
		  }
		  if (message.guild.id=='754965974167453737') {
			var flago = " <:OGserver:803493337255641109> "
		}
		if (message.guild.id=='754965974167453737') {
			var lolos = " :bell: "
		} // botrix
		if (message.guild.id=='721282458708082713') {
			var flag = " <:logo:760017304905449512> "
		}
		if (message.guild.id=='721282458708082713') {
			var flago = " <:OGserver:803493337255641109> "
		}
		if (message.guild.id=='721282458708082713') {
			var lolos = " <:nothinghere:804704872300937246> "
		} //nebs pc
		if (message.guild.id=='736814981839847435') {
			var flag = " <:OGserver:803493337255641109> "
		}
		if (message.guild.id=='736814981839847435') {
			var flago = " <:nothinghere:804704872300937246> "
		}
		if (message.guild.id=='736814981839847435') {
			var lolos = " <:nothinghere:804704872300937246> "
		}
		  const embed = new Discord.MessageEmbed()

			.setTitle('Serverinfo')
			.addField("Badges", flag + flago + lolos, true)
			.addField('General', [
				`**» Name:** ${message.guild.name}`,
				`**:id: » ID:** ${message.guild.id}`,
				`**:pencil: » Owner:** <@${message.guild.ownerID}> (${message.guild.ownerID})`,
				`**:map: » Region:** ${message.guild.region}`,
				`**<a:SeverBoost:804701620524417064> » Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
				`**<a:Vl:804702031738306591> » Verification Level:** ${message.guild.verificationLevel}`,
				`**:calendar: » Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				'\u200b'
			])
			.addField('Statistics', [
				`**<:here:804702946825601034> » Role Count:** ${message.guild.roles.cache.size}`,
				`**<:emoji:725326044537552926> » Emoji Count:** ${message.guild.emojis.cache.size}`,
				`**<:members:675395742650859521> » Member Count:** ${message.guild.memberCount}`,
				`**<:channel:725326041156943972> » Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
				`**<:voice_private:675395742306664458> » Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
				`**<a:nitro:804702963704397844> » Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
				'\u200b'
			])
			
			message.channel.send({ embed });
	}
};

module.exports = Serverinfo;
//
	 //const embed = new Discord.MessageEmbed()
	//.setColor("RANDOM")
	//.setTitle('Serverinfo')
	//.addField('Name', message.guild.name, message.guild.nameAcronym, true)
	///.addField('Server Owner', message.guild.owner.user.tag, true)
	//.addField('Region', message.guild.region, true)
	///.addField("Member Count", message.guild.memberCount, true)
	//.addField("Channel Count", message.guild.channels.cache.size, true)
	//.addField("Roles Count", message.guild.roles.cache.size, true)
	///.addField("Verification Level", message.guild.verificationLevel, true)
	//.addField("Emoji Count", message.guild.emojis.cache.size, true)
	//.addField("Afk Channel", message.guild.afkChannel, true)
	//.addField("Rules Channel", message.guild.rulesChannel, true)
	//.addField("Server Create Date", message.guild.createdAt)
	//.setTimestamp()
	
	//message.channel.send(embed)