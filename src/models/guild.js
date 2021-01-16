const Mongoose = require('mongoose');
const mongoose = require('../util/mongoose');
const GuildSchema = Mongoose.Schema({
    _id: Mongoose.Schema.Types.ObjectId,
    guildId: String,
    guildName: String,
});

module.exports = Mongoose.model('Guild', GuildSchema, 'guilds');