const discord = require("discord.js");
require("padleft");
const client = new discord.Client();
require("dotenv").config();

client.on("ready", () => {
    console.log(`${client.user.tag} is up and running.`);
});

client.on("message", async (msg) => {
    const { channel, content, author, lastMessageID } = msg;

    if (author.username === "SCP Logger") {
        return;
    }

    const contentSplit = content.split(" ");

    if (contentSplit[0] !== "!scp") {
        return;
    }

    const scpNum = parseInt(contentSplit[1], 10);

    if (scpNum === NaN) {
        return;
    }

    if (scpNum < 100) {
        scpNum.padLeft(3, "0");
    } else {
        scpNum.padLeft(4, "0");
    }

    msg.delete();
    channel.send(`http://scpwiki.com/scp-${scp}`);
});

try {
    client.login(process.env.BOT_TOKEN);
} catch (error) {
    console.log(`There is an error in token ${error}`);
}