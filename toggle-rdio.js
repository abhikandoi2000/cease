var pauseButton = document.querySelectorAll('button.play_pause.playing')[0];
var playButton  = document.querySelectorAll('button.play_pause')[0];

console.log(pauseButton);
console.log(playButton);

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
