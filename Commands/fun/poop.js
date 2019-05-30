const commando = require('discord.js-commando');
const client = new commando.Client({
})
class PoopCommand extends commando.Command
{
    constructor(client)
{
    super(client,{
        name: 'poop',
      aliases: ['shit', 'shitpost'],
        group: 'fun',
        memberName: 'poop',
        description: 'shits in chat'
    });
}
    async run(message, args)
  {if(message.channel.type === 'dm') return 
       message.channel.send(':poo::poo::poo::poo::poo::poo::poo::poo::poo::poo::poo::poo::poo::poo::poo:')
    }
}

module.exports = PoopCommand;
