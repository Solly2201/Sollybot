const commando = require('discord.js-commando');

class diceRollCommand extends commando.Command
{
    constructor(client)
{
    super(client,{
        name: 'roll',
      aliases: ['dice', 'diceroll'],
        group: 'fun',
        memberName: 'roll',
        description: 'roles a 6 faced die'
    });
}
    async run(message, args)
    {if(message.channel.type === 'dm') return 
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.channel.send("Your dice landed on " + diceRoll)
    }
}

module.exports = diceRollCommand;
