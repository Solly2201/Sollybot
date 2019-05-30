const commando = require('discord.js-commando');
const client = new commando.Client({
})
const discord = require('discord.js');
class ballCommand extends commando.Command
{
    constructor(client)
{
    super(client,{
        name: '8ball',
      aliases: ['8ball','yesorno'],
        group: 'fun',
        memberName: '8ball',
        description: `Answers the question asked by the user`
    });
}
    async run(message, args)
  
{if(message.channel.type === 'dm') return 
  let color = ((1 << 24) * Math.random() | 0).toString(16); 
let words = args.split(' ');
        let reason = words.slice().join(' ') || "Unspecified";
      function doRandHT() {
var rand = ['Yes', 'No','Maybe','Most Probably','I see That Coming'];
return rand[Math.floor(Math.random()*rand.length)]
}
 let embed = new discord.RichEmbed()
  .setColor(`#${color}`)
 .setDescription('___8ball Question!!___')
 .addField('**Question-** ' + reason, '**Answer-** __' + doRandHT() + '__')
 .setFooter( "Question asked by- " + message.author.username, message.author.displayAvatarURL)
message.channel.send(embed);


};  
}

module.exports = ballCommand
