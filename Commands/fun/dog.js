const superagent = require ("superagent");
const commando = require('discord.js-commando');
const discord = require('discord.js');
class dogCommand extends commando.Command
{
    constructor(client)
{
    super(client,{
        name: 'dog',
      aliases: ['doggo'],
        group: 'fun',
        memberName: 'dog',
        description: 'Sends A random dog pic!'
    });
}
    async run(message, args)
   {if(message.channel.type === 'dm') return 
     let msg = await message.channel.send("Generating...")
let {body} = await superagent
.get(`https://dog.ceo/api/breeds/image/random`);

let dogEmbed = new discord.RichEmbed()
.setTitle("Woof!")
.setColor("#faff00")
.setImage(body.message)
.setFooter("Sollybot, requested by:- " + message.author.username, message.author.displayAvatarURL )
message.channel.send(dogEmbed);
     msg.delete();
return;
  }
}
module.exports = dogCommand;
