// Fade out contents then grab a fresh token.
// This has to happen every hour due to spotify authorization limits.
setTimeout(function() {
  $("#spoofy, #track-artwork-for-background").addClass("fade-out");
  $("#spoofy").addClass("move-up");
  setTimeout(function() {
    console.log("get a new token");
    window.location.href = "/login";
  }, 1000);
}, 3550000); // Slightly less than an hour

// Use the tokens to generate, display and refresh data
(function() {
  function getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  var params = getHashParams();
  var access_token = params.access_token,
    refresh_token = params.refresh_token,
    error = params.error;
  if (error) {
    alert("There was an error during the authentication");
  } else {
    if (access_token) {
      console.log(access_token);

      let currentPlay;

      setInterval(function() {
        $.ajax({
          url: "https://api.spotify.com/v1/me/player/currently-playing",
          headers: {
            Authorization: "Bearer " + access_token
          },
          success: function(response) {
            if (currentPlay === response.item.id) {
              console.log("no change detected");
            } else {
              console.log("change detected, update ID");
              console.log(currentPlay);
              currentPlay = response.item.id;
              console.log(response.item.id);

              $("#spoofy, #track-artwork-for-background").addClass("fade-out");
              $("#spoofy").addClass("move-up");

              setTimeout(function() {
                $("#spoofy").removeClass("move-up");
                $("#spoofy").addClass("move-down");
              }, 1000);

              // Quick and dirty way to get a bunch of repeating names for the scrolling elements
              let repeatingName =
                response.item.name +
                " - " +
                response.item.artists[0].name +
                " - ";

              setTimeout(function() {
                (document.getElementById(
                  "track-info-repeater"
                ).innerHTML = repeatingName.repeat(16)),
                  (document.getElementById("track-name").innerHTML =
                    response.item.name),
                  (document.getElementById("track-artist").innerHTML =
                    response.item.artists[0].name),
                  (document.getElementById("track-artwork").innerHTML =
                    "<img src='" + response.item.album.images[1].url + "'>"),
                  (document.getElementById(
                    "track-artwork-for-background"
                  ).innerHTML =
                    "<img src='" + response.item.album.images[2].url + "'>");
                $("#spoofy").removeClass("move-down");
                $("#spoofy, #track-artwork-for-background").removeClass(
                  "fade-out"
                );
              }, 2000);
            }
          }
        });
        console.log("song check");
      }, 3000);
    } else {
      window.location.href = "/login";
    }
  }
})();
