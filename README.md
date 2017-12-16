# Spotify-Discord
## Simply shows your current playing song on discord.
@phineas's version of this is way better than this.


![img](https://apple.isgay.lol/R9mYIgq.png)

## You need these in order for this to work
>Git and NodeJS

## How to install?
There are two ways of doing this:


### Downloading the zip


>Download the zip from the repository

>Extract the zip to a folder

>Open a cmd line in that folder's directory

>Type out ```npm install```

>Open Discord and Spotify

>Type out ```node main.js```


### Cloning the repo

>Open a command line window in a folder youd like to download this to

>Type out ```git clone https://github.com/tzoofedotio/Spotify-Discord.git```

>Once it finished ```cd Spotify-Discord```

>Type out ```npm install```

>Open Discord and Spotify

>Type out ```node main.js```


### Want to make it run continuously without having the cmd line window open?

>Open a command line window in your app directory

>Type ```npm install pm2 -g``` into the console

>Once thats done put ```pm2 start main.js --name "spotify"```

>Thats it, it will now run in your background, if you wish to close it do ```pm2 stop spotify```
