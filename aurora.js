const Discord = require('discord.js')
    ,config = require("./db/config.json")
    ,games = require("./db/games.json")
    ,fs = require('fs')
    ,client = new Discord.Client({
		   owner: config.ownerID,
		   commandPrefix: config.prefix
		})

//--

client.login(config.token)
require('./db/loader')(client);

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith(`${config.prefix}` + str);
}

//--

client
    .on('error', console.error)
    .on('warn', console.warn)
    .on('debug', console.log)
