const discord = require("discord.js");
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

    msg.delete();
    let scp = scpNum.toString();
    if (scpNum < 100) {
        scp = scp.padStart(3, "0");
    }

    channel.send(`Foundation Information on SCP-${scp}: http://scpwiki.com/scp-${scp}`);
});

try {
    client.login(process.env.BOT_TOKEN);
} catch (error) {
    console.log(`There is an error in token ${error}`);
}
