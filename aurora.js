const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("Aurora is online.");
});

client.on("message", (msg) => {
    if (msg.content.startsWith("ping")) {
        message.channel.send("pong");
    }
});

client.login(config.token)