const commando = require('discord.js-commando');

class spamcommand extends commando.Command
{
    constructor(client)
{
    super(client,{
        name: 'spam',
        group: 'fun',
        memberName: '+spam',
        description: 'Make bot spam what u want'
    });
}
    async run(message, args)
    {if(message.channel.type === 'dm') return 
   message.channel.send('Am I a spammer to you?? <:wuttt:545265391060910090>');
    }
}

module.exports = spamcommand;
