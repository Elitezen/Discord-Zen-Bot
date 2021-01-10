const { readdirSync } = require('fs');
const { join } = require('path');
const eventDir = join(__dirname, '..', 'events');

module.exports.run = Bot => {
    const eventFiles = readdirSync(eventDir);

    for (const eventFile of eventFiles) {
        const event = require(`${eventDir}/${eventFile}`);
        const eventName = eventFile.split('.').shift();

        Bot.on(eventName, event.bind(null, Bot));
        delete require.cache[require.resolve(`${eventDir}/${eventFile}`)];
    }

    Bot.events = eventFiles.length;
    console.log(`${Bot.events} Event${Bot.events > 1 ? 's' : ''} Loaded`);
}