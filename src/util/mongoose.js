require('dotenv').config({path: '../../Discord-Zen-Bot/.env'});

const Mongoose = require('mongoose');
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoDbName = 'Zen';
const connectUrl = `mongodb+srv://Elitezen4531:${mongoPassword}@zen.hjg40.mongodb.net/${mongoDbName}?retryWrites=true&w=majority`;

module.exports = { 
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        Mongoose.connect(connectUrl, dbOptions);
        Mongoose.set('useFindAndModify', false);
        Mongoose.Promise = global.Promise;

        Mongoose.connection.on('connected', () => {
            console.log('Mongoose Successfully Connected');
        });

        Mongoose.connection.on('err', error => {
            console.error(`Mongoose Connection Error:\n${error.stack}`);
        });

        Mongoose.connection.on('disconnected', () => {
            console.warn('Mongoose Has Disconnected')
        });
    }
}