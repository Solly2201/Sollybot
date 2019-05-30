const superagent = require ("superagent");
const commando = require('discord.js-commando');
const discord = require('discord.js');
class catCommand extends commando.Command
{
    constructor(client)
{
    super(client,{
        name: 'cat',
      aliases: ['pussy','meow'],
        group: 'fun',
        memberName: 'cat',
        description: 'Sends A random cat pic!'
    });
}
    async run(message, args)
   {if(message.channel.type === 'dm') return 
let {body} = await superagent
.get(`https://aws.random.cat/meow`);
let catEmbed = new discord.RichEmbed()
.setTitle("Meow!")
.setColor("#faff00")
.setImage(body.file)
.setFooter("Sollybot, requested by:- " + message.author.username, message.author.displayAvatarURL)
message.channel.send(catEmbed);
return;
  }
}
module.exports = catCommand;
