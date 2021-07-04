const { ShardingManager } = require('discord.js');
const Statcord = require("statcord.js");
const { token } = require('./config');
const manager = new ShardingManager('./bot.js', { 
     token,
     totalShards: 1
});

const statcord = new Statcord.ShardingClient({
     key: "statcord.com-WMHAYih1hSwtWm1NpTLe",
     manager,
     postCpuStatistics: true, /* Whether to post CPU statistics or not, defaults to true */
     postMemStatistics: true, /* Whether to post memory statistics or not, defaults to true */
     postNetworkStatistics: true, /* Whether to post memory statistics or not, defaults to true */
     autopost: true /* Whether to auto post or not, defaults to true */
 });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();

statcord.on("autopost-start", () => {
     // Emitted when statcord autopost starts
     console.log("Started autopost");
 });
 
 statcord.on("post", status => {
     // status = false if the post was successful
     // status = "Error message" or status = Error if there was an error
     if (!status) console.log("Successful post");
     else console.error(status);
 });