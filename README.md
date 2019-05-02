### Advice: Skip to the bottom and read the issues, then decide if this is the right solution for your stream.

### 1) Inject your unique bits.
- Visit https://developer.spotify.com/dashboard/applications
- Make a new app.
- Grab your `client id`, `secret`, and `redirect uri`
- put them here: `config.js`

### 2)  Install them dependencies...
- Make sure you've got node installed https://nodejs.org/en/download/
- Run `npm i -S cookie-parser cors express querystring request spotify-web-api-node` from inside the folder or `_installDependencies.bat`.

### 3)  Start 'er up!
- Make sure you have a song playing (or paused) on your Spotify account.
- Run `node app.js` from inside the folder or `_startSpoofy.bat`.=

### 4) Using with OBS
- Pop open your browser and visit http://localhost:8888 (port can be changed in `config.js`)
- First time will direct you to log in and authorize.
- Suggestion: Move that browser to a virtual monitor and maximize it.
- Open OBS and make a new `Window Capture` object.
- Select the browser you made. Move, resize and/or crop as needed.
- And that's it.

### 4a) Customizing
- I've included a few theme files which can be swapped out in `public/index.html`. Pretty basic css stuff which should be self explainatory if you made it this far. Use one of those themes and/or modify it however you'd like.
- All of the included themse are set to work at `1280x720`.

## CURRENT ISSUES
- The url is dynamic, so it won't work as a browser source unless you manually update it every hour.
- First run requires a login, which also hinders the ability to use localhost as a browser source.
- Checks are handled with timeouts. I'm sure that's not the best or right way to do this, but it worked.

## A Humble Plea
If anyone is savvy with this stuff, I'd love some advice on how I can make url static and do authorization calls via ajax. I'd like to make this work as a browser source, but the login and ever-changing url variables are problematic.
Most of what I built came from the spotify dev handbook over here: https://developer.spotify.com/documentation/general/guides/authorization-guide/

## Super Serious Disclaimer
I'm happy to help troubleshoot things, but can't be held responsible if you managed to explode your computer, delete the internet, incur the wrath of spotify, etc... Use at your own risk, and most importantly, enjoy. :)