var pauseButton = document.querySelectorAll('.ytp-button-pause')[0];
var playButton  = document.querySelectorAll('.ytp-button-play')[0];

console.log(pauseButton);

if(typeof(pauseButton) != "undefined") {
  window.localStorage.playing = true;
}


if(window.localStorage.playing) {
  if(pauseButton) {
    pauseButton.click();
  } else if(playButton) {
    playButton.click();
  }
}
