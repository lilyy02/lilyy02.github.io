const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    // icon should change to pause when video is playing, the button should show the action that you will take
    // on play should start video, video should loop until music is paused.
    playPauseImg.src = "assets/icons/icons8-pause-90.png";
  } else {
    video.pause();
    playPauseImg.src = "assets/icons/icons8-play-90.png";
  }
}
// Progress bar changed to show current time of song rather than video. May add seek function if I am able to
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
function loop() {}
function back() {}
function skip() {}
function togglemute() {}
// Add other functionalities here
// icons change to ghostwhite on hover?
