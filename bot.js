const commando = require('discord.js-commando');
const discord = require('discord.js')
const client = new commando.Client({
commandPrefix: "++",
owner: ['474516081059430431'],
nonCommandEditable: true,
disableEveryone: true,
unknownCommandResponse: false,
invite: "https://discord.gg/eshZx98"})
var db = require('quick.db')
client.registry.registerGroup('fun', 'fun');
client.registry.registerGroup('moderation', 'moderation');
client.registry.registerGroup('general', 'general');
client.registry.registerGroup('event', 'event');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/Commands');
global.currentTeamMembers = [];
global.servers = {};

client.on('ready', () => {
  client.user.setActivity("with " + client.users.size + ' people in ' + client.guilds.size + ' servers', {type: "Playing"})
  console.log('I am ready daddy.. Use me now!!!');
});
client.on('message', message => {
 
  //othercmds
  let color = ((1 << 24) * Math.random() | 0).toString(16);
if (message.content === '<@546265612339511296>') {
  let pingembed = new discord.RichEmbed()
   .setColor(`#${color}`)
  .setTitle(message.author.username)
  .setDescription('I am SollyBot and I am made by <@474516081059430431>, My default prefix is `++(customizable)`. To know my prefix for this server do <@546265612339511296> prefix and do `++help` to get a list of my commands.')
  message.channel.send(pingembed)
}
  if(message.content === '++guilds'){
 if(message.author.id !== '474516081059430431') return message.channel.send('ThIs CoMmAnD cAn OnLy bE uSeD By bOt oWnEr!!')
    message.channel.send(new discord.RichEmbed().setDescription(client.guilds.map(a => a.name)))
  }
});
client.login(process.env.BOT_TOKEN);
