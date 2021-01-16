const Discord = require('discord.js');
const Mongoose = require('mongoose');
const Guild = require('../models/guild');

module.exports = async(Bot, guildToDelete) => {
    Guild.findOneAndDelete({
        guildId: guildToDelete.id,
    }, (err, res) => {
        if (err) console.error(err);
        console.log('Zen Has Been Removed From A Server');
    });
}