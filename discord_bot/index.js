const dotenv = require('dotenv');
dotenv.config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => { 
    console.log("Bot Online!");
})

client.on("messageCreate", async (message) => {
    if (message.content === "ping") {
        message.reply({
            content: "pong"
        })
    }
})

client.login(process.env.DISCORD_TOKEN)

client.on("messageCreate", async (message, ...nums) => {
    if (message.content.startsWith("add")) {
        const args = message.content.slice("add".length).trim().split(' ');
        console.log(args)
        total = 0
        for (var numStr of args) {
            total += parseInt(numStr, 10)
        }
        console.log(total)
        message.reply({
            content: `${total}`
        })
    }
})