
//clears the console screen when running node.
//console.clear();

//require("dotenv")

const Discord = require("discord.js");
const config = require("./Data/config.json");
const intents = new Discord.Intents(32767);
const prefix = '&';

const client = new Discord.Client({
    allowedMentions:{
        parse: [`users`, `roles`],
        repliedUser: true,
    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS",
    ],

});



/** */
//const bot = new Discord.Client({ intents });

client.on("ready", () => console.log("R. Dorothy Wayneright is online! 😂💀\nCheck Discord if she\'s online."));

/** 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})*/

//messageCreate  instead of message discord.js 13.x.x

client.on("message", message => {
    console.log(message.content);
});

client.login(config.token);

client.on('message', gotMessage);

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    //message array var
const messageArray = message.content.split(" ");
const argument = messageArray.slice(1);
const cmd = messageArray[0];

    //test command
if (command === 'test'){
    message.channel.send('1738')
    message.channel.send('Created by jacc')
}

if (command === 'kevin'){
    message.channel.send('FUCK KEVIN')
}

if (command === 'roast'){
    message.channel.send('1738')
}


    //member count
if (cmd === `${prefix}membercount`){
    message.channel.send(`**Server Members:** ${message.guild.memberCount}`)
}



})


function gotMessage(msg){
    console.log(msg.content)
      if (msg.content.includes('BURNER') || msg.content.includes('burn')|| msg.content.includes('Burn') || msg.content.includes('BURN') || msg.content.includes('BURNERS') || msg.content.includes('burners') || msg.content.includes('burner') || msg.content.includes('bUrNeR')|| msg.content.includes('burn3r')){
        msg.reply('1738')
    // } else if (msg.content.includes('BURNER') || msg.content.includes('BURNERS') || msg.content.includes('burners') || msg.content.includes('burner')){
    //     msg.reply('Shouldn\'t you be studying?')
    // } else if (msg.content.includes('bf') || msg.content.includes('BF') || msg.content.includes('battlefield') || msg.content.includes('BATTLEFIELD')){
    //     msg.reply('Shouldn\'t you be studying?')
    // } else if (msg.content.includes('dorothy play bf') || msg.content.includes('let\'s play BF') || msg.content.includes('lets play BF bf') || msg.content.includes('')){ //886809275224174612
    //     msg.reply('Shouldn\'t you be studying?')
    //}
    // if (msg.content.includes('dorothy') || msg.content.includes('DOROTHY') || msg.content.includes('どろしー') || msg.content.includes('d o r o t h y') || msg.content.includes('ドロシー')){
    //    msg.reply('Hello.')
    // } else if (msg.content.includes('dorothy') || msg.content.includes('DOROTHY') || msg.content.includes('どろしー') || msg.content.includes('d o r o t h y') || msg.content.includes('ドロシー')){
    //     msg.reply('I am an android. 😐')
    }
}

// function gotMessage(msg){
//     console.log(msg.content);
//      if (msg.content.includes('DOROTHY')){
//         msg.reply('Hello.')
//     } 
// }


// function gotMessage(msg){
//     console.log(msg.content);
//     if (msg.content === 'BF'){
//         msg.reply('Shouldn\'t you be studying?')
//     }
// }

//|| "burner" || "BURNERS" || "burners
//client.login(process.env.DISCORD_BOT_TOKEN)
