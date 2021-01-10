const Discord = require('discord.js');
const Bot = new Discord.Client();
const loadEvents = require('../src/handlers/event.js');

Bot.events = new Discord.Collection();

const load = async() => await loadEvents.run(Bot);

load();
require('dotenv').config({path: '../Discord-Zen-Bot/.env'});
Bot.login(process.env.BOT_LOGIN_TOKEN);