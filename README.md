## Demo:

[![Video](readme_img/spoofy-video.jpg)](https://www.youtube.com/watch?v=q6wCIXFtSf0?vq=hd1080)

### NOTE: This video is outdated, but still accurate enough to use for the general setup.

## First Time Setup:

The following two steps and spotify authorization only have to happen once. After that, you can start the app by running `node spoofy.js` or `_startSpoofy.bat`.

### 1) Inject your unique bits.

- Visit https://developer.spotify.com/dashboard/applications
- Make a new app.
- Set the `redirect uri` to `http://localhost:8888/callback`
- Grab your `client id`, `secret`, and put that info into `config.js`

![Configure](readme_img/spoofyconfig.jpg?raw=true)

### 2) Install them dependencies...

- Stick node on your machine: https://nodejs.org/en/download/
- Run `npm i -S cookie-parser cors express querystring request spotify-web-api-node` from inside the folder or `_installDependencies.bat`.

## Running the App

- Make sure you have a song playing (or paused) on your Spotify account.
- Run `node spoofy.js` from inside the folder or `_startSpoofy.bat`.
- Pop open your browser and visit http://localhost:8888
- First time will direct you to log in and authorize.

## Customizing

- I've included a few theme files which can be swapped out in `public/index.html`.
- Use one of those themes and/or modify it however you'd like.

![Themes](readme_img/customization.jpg?raw=true)

## Using with OBS

- With spoofy and spotify running, Open OBS and make a new `Browser` source.
- Set the `URL` to `http://localhost:8888`.
- To sign into spotify (first time setup), right click on this new source, then click `interact` towards the bottom of the context menu.
- Once you're in, move, resize and/or crop as needed.

## Super Serious Disclaimer

I'm happy to help troubleshoot things, but can't be held responsible if you managed to explode your computer, delete the internet, incur the wrath of spotify, etc... Use at your own risk, and most importantly, enjoy. :)
