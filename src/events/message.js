module.exports = (Bot, Message) => {
    let prefix = '>';

    if (!Message.channel.type === 'dm' && !Message.author.bot && Message.content.startsWith(prefix)) {
        const args = Message.content.slice(prefix.length).trim().split(/ +/);
        const commandToGet = args.shift().toLowerCase();
        if (!Bot.commands.has(commandToGet)) return;

        try {
            Bot.commands.get(commandToGet).execute(Bot, Message, args);
        } catch (err) {
            console.error(err);
            Message.reply('An Error Has Occured');
        }
    }
}