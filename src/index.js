const Discord = require('discord.js');
const fs = require('fs');
const Bot = new Discord.Client();
const loadEvents = require('../src/handlers/event.js');

Bot.events = new Discord.Collection();
Bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('../Discord-Zen-Bot/src/commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`../src/commands/${file}`);
    Bot.commands.set(command.name, command);
}

const load = async() => await loadEvents.run(Bot);

load();
require('dotenv').config({path: '../Discord-Zen-Bot/.env'});
Bot.login(process.env.BOT_LOGIN_TOKEN);