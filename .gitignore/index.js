const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("regarder des Hentais");
    console.log("Le bot a bien été connecté")    
});

bot.login(process.env.TOKEN);
