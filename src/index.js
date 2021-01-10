const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log('Login Successful!');
});

require('dotenv').config({path: '../Discord-Zen-Bot/.env'});
Bot.login(process.env.MAIN_BOT_TOKEN);