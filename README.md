### Advice: Skip to the bottom and read the issues, then decide if this is right for you.

### 1) Inject your unique bits.
- Visit https://developer.spotify.com/dashboard/applications
- Make a new app.
![Theme 1](readme_img/spoofyconfig.jpg?raw=true)

- Grab your `client id`, `secret`, and `redirect uri`
- put them here: `config.js`
![Theme 1](readme_img/make-an-app.jpg?raw=true)

### 2)  Install them dependencies...
- Make sure you've got node installed https://nodejs.org/en/download/
- Run `npm i -S cookie-parser cors express querystring request spotify-web-api-node` from inside the folder or `_installDependencies.bat` if you're on windows.

### 3)  Start 'er up!
- Make sure you have a song playing (or paused) on your Spotify account.
- Run `node app.js` from inside the folder or `_startSpoofy.bat`.

### 4) Using with OBS
- Pop open your browser and visit http://localhost:8888 (port can be changed in `config.js`)
- First time will direct you to log in and authorize.
- Suggestion: Move that window to a virtual monitor and maximize it.
- Open OBS and make a new `Window Capture` object.
- Select the browser running localhost. Move, resize and/or crop as needed.
- And that's it. As long as the server is running and the browser doesn't change size, your stream should show the spotify info.

### 4a) Customizing
- I've included a few theme files which can be swapped out in `public/index.html`. Pretty basic css stuff which should be self explainatory if you made it this far. Use one of those themes and/or modify it however you'd like.
- All of the included themse are set up to work at `1280x720`.

![Theme 1](readme_img/screenshot1.jpg?raw=true)
![Theme 3](readme_img/screenshot2.jpg?raw=true)


## CURRENT ISSUES
- The url is dynamic, so it won't work as a browser source unless you manually update it every hour.
- First run requires a login, which also hinders the ability to use localhost as a browser source.
- Checks are handled with timeouts. I'm sure that's not the best or right way to do this, but it worked.
- Since the current iteration works as a window capture, it either requires a mask or must be placed behind the video.

## A Humble Plea
If anyone is savvy with this stuff, I'd love some advice on how I can make url static and do authorization calls via ajax. I'd like to make this work as a browser source, but the login and ever-changing url variables are problematic.

## Super Serious Disclaimer
I'm happy to help troubleshoot things, but can't be held responsible if you managed to explode your computer, delete the internet, incur the wrath of spotify, etc... Use at your own risk, and most importantly, enjoy. :)
