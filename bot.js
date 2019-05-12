const discord = require('discord.js')
const client = new Discord.Client();
var db = require('quick.db')
client.on('ready', () => {
  client.user.setActivity("++help!!", {type: "Watching"})
  console.log('I am ready daddy.. Use me now!!!');
});
client.on('message', message => {
  let color = ((1 << 24) * Math.random() | 0).toString(16);
if (message.content === '<@546265612339511296>') {
  let pingembed = new discord.RichEmbed()
   .setColor(`#${color}`)
  .setTitle(message.author.username)
  .setDescription('I am SollyBot and I am made by <@474516081059430431>, My default prefix is `++(customizable)`. To know my prefix for this server do <@546265612339511296> prefix and do `++help` to get a list of my commands.')
  message.channel.send(pingembed)
}
  
});
client.login(process.env.BOT_TOKEN);
