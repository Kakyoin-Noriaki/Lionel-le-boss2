const Discord = require("discord.js");
const bot = new Discord.Client();
const token = require("./token.json");
const prefix = "$";


bot.on("ready", async () =>{
    console.log("Le Bot est allumé")
    bot.user.setStatus("dnd")
    bot.user.setActivity("One Piece Fighting Path");

    bot.guilds.cache.find(guild => guild.id === "847937666091581460").channels.cache.find(channel => channel.id ==="848207681893826571").messages.fetch("849693978478641172").then(message =>{
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log("erreur d ajout en mémoire : " + err);
    });
});

bot.on("messageReactionAdd", (reaction, user) => {
    console.log("reaction ajouté");
});

bot.on("messageReactionRemove",(reaction, user) => {
    console.log("reaction retiré")
});

bot.on("message", message => {
     if(message.author.bot) return;
     
     message.react("☠️");

    //$wsh
     if(message.content == prefix + "wsh"){
        message.reply("One piece>>>all");
        
    }

    if(message.content == prefix + "stat"){
        message.channel.send("**" + message.author.username + "** a envoyé ");
    }
});




bot.login(process.env.bot_TOKEN);
