const Discord = require("discord.js");
const Command = require("../../base/Command.js");
class Userinfo extends Command {
	constructor(client) {
		super(client, {
			name: "user",
			description: "view a user's info",
			usage: ".user (@user)",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["userinfo", "i"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
	    const flags = {
    
    "HOUSE_BRILLIANCE":" <:hypesquad_briliance:773159463322124299> ",
    "HOUSE_BRAVERY":" <:hypesquad_bravery:773159504089972787> ",
    "HOUSE_BALANCE":" <:hypesquad_balance:773159483345731654> ",
    "HYPESQUAD_EVENTS":" <:hypesquad_events:773066279892418613>",
    "BUGHUNTER_LEVEL_1":" <:BugHunter:773159572549795872> ",
    "BUGHUNTER_LEVEL_2":" <:BugHunterLvl2:773159627692965888> ",
    "DISCORD_EMPLOYEE":" <:DiscordStaff:773159418568507402> ",
    "PARTNERED_SERVER_OWNER":" <:new_discord_partner:773159393700216832> ",
  }
  var flagdesc = "\u200b"
  const user = message.mentions.users.size
    ? message.mentions.users
        .first()
    : message.author;
  const avatar = message.mentions.users.size
    ? message.mentions.users
        .first()
        .avatarURL({ format: "png", dynamic: true, size: 2048 })
    : message.author.avatarURL({ format: "png", dynamic: true, size: 2048 });
  let mflags = user.flags.toArray()
  var i = 0;
  if(mflags.length!==0) {
    for(i=0; i<mflags.length; i++) {
      var flagdesc = flagdesc + ' ' + flags[mflags[i]]
    }
  } // devs 
  if  (client.devIds.indexOf(user.id) !== -1) {
    var flagdesc = flagdesc + ' <:MilkBotDev:822657126203785236> '
  } // support team
  if (client.supportteamIds.indexOf(user.id) !== -1) {
    var flagdesc = flagdesc + ' <:Milkbotsupportteam:763458189194559498> '
  } // bugfinder
  if (client.bugfinderIds.indexOf(user.id) !== -1) {
    var flagdesc = flagdesc + ' <:BotBugFinder:784658006863249409> '
  } // idk lol
  if (client.coolpeopleIds.indexOf(user.id) !== -1) {
    var flagdesc = flagdesc + ' <:RED:758637149464952842> '
  } //boosters
  if (client.boostersIds.indexOf(user.id) !== -1) {
    var flagdesc = flagdesc + ' <:Serverbooster:773159595900272650> '
  } // neb
  if (user.id=='591179218830753793') {
    var flagdesc = flagdesc + ' <:funnycat2:783865525897658408> '
  } 
  let cd = new Date(user.createdAt).toDateString()
  let status = message.guild.member(user).presence.activities
  if (status.length>0) {
    var statusemoji = ""
    if(typeof status[0].emoji!=="null") statusemoji = status[0].emoji
    if(statusemoji == ""||statusemoji=="null") statusemoji = "\u200b"
    var state = (typeof status[0].state !== "null") ? status[0].state : "\u200b"
    var sm = ""
    if(status[0].type == "PLAYING") sm = " Playing "
    if(status[0].type == "WATCHING") sm = " Watching "
    if(status[0].type == "LISTENING") sm = " Listening to "
    if(status[0].type == "WATCHING") sm = " Watching "
    if(status[0].type == "STREAMING") sm = " Streaming "
    if(status[0].type == "COMPETING") sm = " Competing "
    if(status[0].type == "CUSTOM_STATUS") sm = "\u200b "
    if(typeof status[0].type == "null"||sm == "") sm = "\u200b"
  }
  let SM = status.length>0 ? `${statusemoji}${sm}${state}` : 'None'
  let jd = new Date(message.guild.member(user).joinedAt).toDateString()
  const embed = new Discord.MessageEmbed()
    .setTitle(`**${user.username}**`)
    .setThumbnail(`${avatar}`)
    .setFooter(`${user.id}`)
    .addFields({ name:flagdesc, value: '\u200b', inline: true })
    .addField("**Name**", `**${user.username}**`)
    .addField("**Account Created**", `${cd}`)
    .addField("**Joined on**", `${jd}`)
    message.channel.send({ embed });
	}
};

module.exports = Userinfo;
// .addField("Discriminator", `${message.author.discriminator}`) value: `**Top Role:** ${
      //  message.guild.member(user).roles.highest
    //  }`,