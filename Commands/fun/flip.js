const commando = require('discord.js-commando');

class CoinFLipCommand extends commando.Command
{
    constructor(client)
{
    super(client,{
        name: 'flip',
      aliases:['toss','coinflip','coin','cf'],
        group: 'fun',
        memberName: 'flip',
        description: 'flips a coin, landing on heads or tails'
    });
}
    async run(message, args)
    {if(message.channel.type === 'dm') return 
      let emoji = '<a:thinkspin:526021482325999636>'
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.channel.send('Your Coin landed on Heads! ' + `${emoji}`);
        }
        else
        {
            message.channel.send('your coin landed on Tails! ' + `${emoji}`)
        }
    }
}

module.exports = CoinFLipCommand;
