/* eslint-disable no-console */
const path = require('path');
const url = require('url');
const DiscordRPC = require('discord-rpc');
const nodeSpotifyWebHelper = require('./spotifything.js');
const spotify = new nodeSpotifyWebHelper.SpotifyWebHelper();

const ClientId = '385379819216437248';
const rpc = new DiscordRPC.Client({
    transport: 'ipc'
});
const startTimestamp = new Date();




async function setActivity() {
    spotify.getStatus(function(err, res) {
        if (err) {
            return console.error(err);
        }
        console.log(`Now Playing ${res.track.track_resource.name} by ${res.track.artist_resource.name}`);
        rpc.setActivity({
            details: `👱 ${res.track.artist_resource.name}`,
            state: `🎵 ${res.track.track_resource.name}`,
            largeImageKey: 'spotify',
            largeImageText: `Playing ${res.track.track_resource.name} by ${res.track.artist_resource.name}`,
            smallImageKey: 'play',
            smallImageText: 'doot',
            instance: false,
        });

    });
}
rpc.on('ready', () => {
    setActivity();
    console.log("started the thing ok");
    // activity can only be set every 15 seconds
    setInterval(() => {
        setActivity();
    }, 15e3);
});

rpc.login(ClientId).catch(console.error);
