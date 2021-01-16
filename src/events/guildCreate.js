const Discord = require('discord.js');
const Mongoose = require('mongoose');
const Guild = require('../models/guild');

module.exports = async(Bot, newGuild) => {
    newGuild = new Guild({
        _id: Mongoose.Types.ObjectId(),
        guildId: newGuild.id,
        guildName: newGuild.name,
    });

    newGuild.save()
        .then(res => console.log(res))
        .catch(err => console.error(err));

    console.log('Zen Joined A New Server');
}