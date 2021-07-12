const discord = require("discord.js");
require("padleft");
const client = new discord.Client();
require("dotenv").config();

client.on("ready", () => {
    console.log(`${client.user.tag} is up and running.`);
});

client.on("message", async (msg) => {
    const { channel, content, author } = msg;
    console.log(msg);
    if (author.username === "SCP Logger") {
        return;
    }

    const contentSplit = content.split(" ");

    if (contentSplit[0] !== "!scp") {
        return;
    }

    if (parseInt(contentSplit[1], 10) === NaN) {
        return;
    }

    let scp = contentSplit[1];
    if (parseInt(scp, 10) < 100) {
        scp.padLeft(3, "0");
    } else {
        scp.padLeft(4, "0");
    }

    channel.send(`http://scpwiki.com/scp-${scp}`);
});

try {
    client.login(process.env.BOT_TOKEN);
} catch (error) {
    console.log(`There is an error in token ${error}`);
}