const loadEvent =(event) => require(`../core/${event}`)
module.exports = client => {
    client.on('ready', () => loadEvent('ready')(client));
    client.on('disconnect', () => loadEvent('disconnect')(client));
    client.on('reconnecting', () => loadEvent('reconnecting')(client));
    client.on('message', loadEvent('message'));

}