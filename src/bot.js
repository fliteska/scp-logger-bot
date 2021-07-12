const discord = require("discord.js");
const client = new discord.Client();
require("dotenv").config();
function scpRegexMatches(content) {
    const regex = /SCP-\d{1,4}/gim;
    let m;
    const scpList = [];

    while ((m = regex.exec(content)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
            scpList.push(match.toLowerCase());
        });
    }
    return scpList;
}
client.on("ready", () => {
    console.log(`${client.user.tag} is up and running.`);
});

client.on("message", async ({ channel, content, author }) => {
    console.log(author);
    const scpMentions = scpRegexMatches(content);
    if (scpMentions.length === 0) {
        return;
    }
    scpMentions.forEach(scp => {
        channel.send(`https://scpwiki.com/${scp}`);
    });
});

try {
    client.login(process.env.BOT_TOKEN);
} catch (error) {
    console.log(`There is an error in token ${error}`);
}