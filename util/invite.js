const { MessageEmbed } = require("discord.js");

const { EMOJI_ARROW } = require('../config.json');
const { SERVER_INVITE } = require('../config.json');
const { BOT_ID } = require('../config.json');

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "To add/invite the bot to your server",
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**SUPPORT SERVER**`)
      .setDescription(


`${EMOJI_ARROW} **Invite me with Normal Perms [(Click Here)](https://discord.com/api/oauth2/authorize?client_id=951170318410588212&permissions=2205157905&response_type=code&scope=identify%20bot%20applications.commands)**

${EMOJI_ARROW}  **Invite me with Admin Perms [(Click Here)](https://discord.com/api/oauth2/authorize?client_id=951170318410588212&permissions=2205157905&response_type=code&scope=identify%20bot%20applications.commands)**
`
          
      )
      .setURL(
        `${SERVER_INVITE}`
      )
      .setColor("RANDOM");
    return message.channel.send(invite);
  }
};



console.log("invite working")