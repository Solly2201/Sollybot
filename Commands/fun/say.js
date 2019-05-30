const commando = require('discord.js-commando');

class saycommand extends commando.Command
{
    constructor(client)
{
    super(client,{
        name: 'say',
        group: 'fun',
        memberName: 'say',
        description: 'Make bot say what u want'
    });
}
    async run(message, args)
    {if(message.channel.type === 'dm') return 
   let Saymessage = args.split(' ').join(' ')
   if(!Saymessage) return message.channel.send('You actually need to type a message for this cmd to work!!!')
   message.delete().catch();
   message.channel.send(Saymessage)
    }
}

module.exports = saycommand;
