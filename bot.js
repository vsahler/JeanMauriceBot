require("dotenv").config()
const {Client, Intents} = require("discord.js");
const client = new Client({intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ]});

client.on("messageCreate", (message) => {
    /* console.log(`${message.author.username} : ${message.content}`)
    if(!message.author.bot) {
        message.reply("Truc")
            .then(() => console.log(`Replied to message "${message.content}"`))
            .catch(console.error);
    } */

})

client.login(process.env.TOKEN)
    .then(r => console.log("JEAN MAURICE IS UP !"))
    .catch(console.error)