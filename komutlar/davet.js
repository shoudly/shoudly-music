const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'davet',
     aliases: ['davet']
 }
 
 module.exports.sex = async(client, message, args, config) => {

let prefix = config.BotPrefixes[Math.floor(Math.random() * config.BotPrefixes.length)];

message.channel.send(new MessageEmbed().setAuthor(`${message.client.user.username}`, message.client.user.avatarURL).setColor('RANDOM')
.addField('Sunucunuza eklemek isterseniz;',`
[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL))

};
