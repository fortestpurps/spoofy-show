![Themes](readme_img/customization.jpg?raw=true)

## First Time Setup:

### 1) Inject your unique bits.
- Visit https://developer.spotify.com/dashboard/applications
- Make a new app.
- Set the `redirect uri` to `http://localhost:8888/callback`
- Grab your `client id`, `secret`, and put that info into `config.js`

![Configure](readme_img/spoofyconfig.jpg?raw=true)

### 2)  Install them dependencies...
- Make sure you've got node installed https://nodejs.org/en/download/
- Run `npm i -S cookie-parser cors express querystring request spotify-web-api-node` from inside the folder or `_installDependencies.bat`.

## Running the App
- Make sure you have a song playing (or paused) on your Spotify account.
- Run `node app.js` from inside the folder or `_startSpoofy.bat`.
- Pop open your browser and visit http://localhost:8888
- First time will direct you to log in and authorize.

## Using with OBS
- Open OBS and make a new `Window Capture` object.
- Select the browser running localhost. Move, resize and/or crop as needed.

## Customizing
- I've included a few theme files which can be swapped out in `public/index.html`.
- Use one of those themes and/or modify it however you'd like.

![Themes](readme_img/customization.jpg?raw=true)


## CURRENT ISSUES
- First run requires a login, which also hinders the ability to use localhost as a browser source.
- Since the current iteration works as a window capture, it either requires a mask or must be placed under the video layer(s).

## Super Serious Disclaimer
I'm happy to help troubleshoot things, but can't be held responsible if you managed to explode your computer, delete the internet, incur the wrath of spotify, etc... Use at your own risk, and most importantly, enjoy. :)
