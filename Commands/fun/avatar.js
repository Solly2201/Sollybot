const commando = require('discord.js-commando');
const discord = require('discord.js');
class AvatarCommand extends commando.Command
{
    constructor(client)
{
    super(client,{
        name: 'avatar',
      aliases: ['pfp'],
        group: 'fun',
        memberName: 'avatar',
        description: 'Displays Avatar Of Mentioned User'
    });
}
    async run(message, args)
   {if(message.channel.type === 'dm') return 
    let aUser = message.mentions.users.first() || message.author;

let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
      let embed = new discord.RichEmbed() //Embeds.
            .setTitle("Avatar!")
            .setImage(aUser.displayAvatarURL)
            .setColor(`#${color}`)
      .setFooter("Sollybot, requested by:- " + message.author.username, message.author.displayAvatarURL )
     message.channel.send({embed: embed});
  }
}
module.exports = AvatarCommand;
