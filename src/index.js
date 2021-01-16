require('dotenv').config({path: '../Discord-Zen-Bot/.env'});

const Discord = require('discord.js');
const fs = require('fs');
const Bot = new Discord.Client();
const loadEvents = require('./util/event');
const commandDirectory = '../Discord-Zen-Bot/src/commands/';

const commandFiles = fs.readdirSync(commandDirectory).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    Bot.commands.set(command.name, command);
}

const load = async() => await loadEvents.run(Bot);
load();

Bot.events = new Discord.Collection();
Bot.commands = new Discord.Collection();
Bot.mongoose = require('./util/mongoose');
Bot.mongoose.init();
Bot.login(process.env.BOT_LOGIN_TOKEN);