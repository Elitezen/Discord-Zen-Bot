module.exports = (Bot, Message) => {
    let prefix = '>';

    const msgIsDM = Message.channel.type === 'dm';
    const authorIsBot = Message.author.bot;
    const notForZen = !Message.content.startsWith(prefix);
    if (msgIsDM || authorIsBot || notForZen) return;

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