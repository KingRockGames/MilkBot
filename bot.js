const Discord = require("discord.js"),
Milk = require("./base/Milk.js"), 
fs = require("fs");
client = new Milk({ shardCount: 1 }),
config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
fetch = require('node-fetch')
const db = './db.db';
Statcord = require("statcord.js");



// =========== Chat Bot
client.on("message", async message => {
	if (message.channel.name == "chatbot") {
	if (message.author.bot) return;
	message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
	if (message.content.includes(`@`)) {
	return message.channel.send(`**:x: Please dont mention anyone**`);
	 }
   if (message.content.includes(`who made you`)) {
    return message.channel.send(`> ${message.content} \n <@${message.author.id}> Well who made you.`);
     }
	  message.channel.startTyping();
	
	fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=YaBoiUwU#6969`)
		.then(res => res.json())
		.then(data => {
			message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
			console.log(`Chatbot: \nUser: ${message.author.tag}\nContent: ${message.content}\nReply: ${data.message}`)
			
		});
		  message.channel.stopTyping();
	}
	});

// =========== Mc server stats
//const players = "test 4"
///const testing = client.channels.cache.get("555945877483814915")

//client.on('ready', message => {
//
//testing.send(`${players}`).then((message) => {
   // setInterval(function() {
 ///     message.edit(`${players}`)
 /// }, 60000)}
  //)}
//)


// =========== Load The Events


const events = fs.readdirSync("./events/").filter(file => file.endsWith(".js"));
for (const file of events) {
	const eventName = file.split(".")[0];
	const event = new (require(`./events/${file}`))(client);
	client.on(eventName, (...args) => event.run(...args));
	delete require.cache[require.resolve(`./events/${file}`)];
}

// =========== Load The Commands

const commandDirs = fs.readdirSync("./commands/");
for (const dir of commandDirs) {
	const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
	for (const cmd of commands) client.loadCommand(`./commands/${dir}`, cmd);
}

// =========== Client Events

const botStateArray = [
	"v1.9.0.6b",
	`${client.guilds.cache.size}`
	];
	const URL = "https://auth.mcleaks.net/v1/redeem"
client
 
	.on("ready", () => {
		client.log("Bot is Ready!")
	
		client.log(`${client.guilds.cache.size} Servers \n ${client.users.cache.size} Users \n ${client.channels.cache.size} Channels`)
        setInterval(() => {
				const index = Math.floor(Math.random() * (botStateArray.length - 1) + 1); // Generates a number between 1 and the botStateArray length.
				client.user.setActivity(`We Pog now | ${client.guilds.cache.size}`); // defines bot's activity as a product between the random number and the array itself
			}, 60000); // time between state changes in miliseconds.
		
		
		
	})
 	.on("disconnect", () => client.warn("Bot is disconnecting . . ."))
	.on("reconnecting", () => client.log("Bot reconnecting . . ."))

	.on("rateLimit", info => client.warn(JSON.stringify(info)))

	.on("error", e => client.warn(e))
	.on("warn", info => client.warn(info, { shard: "Manager" }))
	

// Shards
	.on("shardReady", id => client.log(`Connected!`, { title:`Shard ${id}`, shard: id }))
	.on("shardResume", id => client.log(`Resumed!`, { title:`Shard ${id}`, shard: id }))
	.on("shardReconnecting", id => client.log(`Reconnecting!`, { title:`Shard ${id}`, shard: id }))
	.on("shardDisconnect", id => client.log(`Disconnected!`, { title:`Shard ${id}`, shard: id }))
	.on("shardError", (shardID, e) => client.error(`Shard ${shardID} Error!`, e))

// Miscellaneous
 	.on("guildCreate", g => client.log(`${client.user.username} has been added to **${g.name}**`))
 	.on("guildDelete", g => client.log(`${client.user.username} has been removed from **${g.name}**`))
// =========== Process Stuff

process.noDeprecation = true
process.title = "Milk";

// =========== Log in to Discord
client.login(client.config.token);
