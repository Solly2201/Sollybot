const commando = require('discord.js-commando');
const discord = require('discord.js');
const ms = require('ms')
const client = new commando.Client({
})
class infocommand extends commando.Command
{
    constructor(client)
{
 
    super(client,{
        name: 'info',
      aliases:['botinfo'],
        group: 'general',
        memberName: 'info',
        description: 'Sends Information about the bot'
    });
}
    async run(message, args)
    { if(message.channel.type === 'dm') return 
       let color = ((1 << 24) * Math.random() | 0).toString(16);
        let botEmbed = new discord.RichEmbed()
.setTitle('Bot Info')
.setColor(`#${color}`)
.setDescription("**_Here's some info about me! Do `++help` for more!!!_**")
.addField("*Bot Name*", '**SollyBot**')
.addField("_Bot Owner_", "**<@474516081059430431>**")
.addField("_Created On_", "**Thrusday, 21 February 2019**")
.addField("*Prefix*", '**`++[customizable]`**') 
.addField("_No. Of Users_", '**' + message.client.users.size + "**")
.addField("_No. Of Servers_", "**" + message.client.guilds.size + "**")
.addField("_No. Of Channels_", "**" +  message.client.channels.size + "**")
.addField("_No. Of Emojis_", "**" + message.client.emojis.size + "**")
.addField("_Uptime_", "**" + ms(message.client.uptime) + "**")
.addField("_Ping_", "**" + message.client.ping + "ms**")
.setThumbnail(`https://cdn.discordapp.com/avatars/546265612339511296/4a962fee8561c60707084dc075078a77.png`)
.setFooter("requested by:- " + message.author.username, message.author.displayAvatarURL )
return message.channel.send(botEmbed);
}
};
module.exports = infocommand;
