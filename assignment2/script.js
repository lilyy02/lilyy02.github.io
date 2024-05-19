//assigning elements in html page to variable
const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// a lot of the javascript was done using https://www.geeksforgeeks.org/create-a-music-player-using-javascript/ as a guide for how to load multiple tracks and have the one set of controls work for all the songs
// const: variable cannot be reassigned a new value 
// let: variable can be reassigned new value
// variables need to be defined in html document, eg. there must be an element with "track-title" as the class
// # before name: item only accessible to things inside the class. targets specific elements with a unique id.
// "." targets multiple elements with a particular class
// I am using let for variables that dynamically change depending on what song is playing
let title = document.querySelector("track-title");
let artist = document.querySelector("track-artist");
const skipBtn = document.querySelector("#skip-btn");
const prevBtn = document.querySelector("prev-btn");
let seekSlider = document.querySelector("");
const volumeSlider = document.querySelector("");
let time = document.querySelector("");
let duration = document.querySelector("");



// audio has the let keyword as the file it is sourcing will change, while there is only one video present.
let currentTrack = document.createElement('audio');
// the track list is an array to store multiple values in the one variable
// each track is defined as an object in the track list - whats between each set of curly brackets counts as an object
// data such as title, artist and path are all info associated with one object 
// having the tracklist stored in an array in the javascript means that the information such as the song title and artist for the currently playing song can be updated to match the current media being played.
const tracklist = [
  {
    title: "Underwater Exploration",
    artist: "Godmode",
    src: "assets/music/1 - Underwater Exploration - Godmode.mp3",
  },
  {
    title: "Dolphin-esque",
    artist: "Godmode",
    src: "assets/music/2 - Dolphin-esque - Godmode.mp3",
  },
  {
    title: "Float",
    artist: "Geographer",
    src: "assets/music/3 - Float - Geographer.mp3",
  },
  {
    title: "Amber",
    artist: "VYEN",
    src: "assets/music/4 - Amber - VYEN",
  },
  {
    title: "When the Ash Settles",
    artist: "The Westerlies",
    src: "assets/music/5 - When the Ash Settles - The Westerlies.mp3",
  },
  {
    title: "Leave it Alone",
    artist: "Underbelly",
    src: "assets/music/6 - Leave It Alone - Underbelly.mp3",
  },
  {
    title: "Somnia III",
    artist: "Reed Mathis",
    src: "assets/music/7 - Somnia III - Reed mathis.mp3",
  },
  {
    title: "Dream Escape",
    artist: "The Tides",
    src: "assets/music/8 - Dream Escape - The Tides.mp3",
  },
];


let trackIndex = 0;
// isPlaying variable only needs to be a boolean, true or false. set to false by default, will start playing when isPlaying is set to true
let isPlaying = false;
let updateTimer;




// a function is used when the play button is clicked to load a track from the list.
// loadtrack function clears the progress on the seek bar
function loadTrack(trackIndex) {
 clearInterval(updateTimer);
 time.textContent = "00:00";
 duration.textContent = "00:00"
 seekSlider.value = 0;
// .textcontent retrieves the text data associated with the current song
title.textContent = tracklist[trackIndex].title;
artist.textContent = tracklist[trackIndex].artist;
// 1000ms delay prevents timer from updating too frequently to the point where there is lag
updateTimer = setInterval(seekUpdate,1000)
// listens for the event that the current track has ended, then plays the next track in the list
currentTrack.addEventListener("ended", nextTrack);
}




  // make toggleplaypause check for the condition that isPlaying = false



function togglePlayPause() {
  if (video.paused || !isPlaying) {
    video.play();
    playPauseImg.src = "assets/icons/icons8-pause-90.png";
    playTrack();
  } else {
    video.pause();
    playPauseImg.src = "assets/icons/icons8-play-90.png";
    pauseTrack();
  }
}
// seem to have to put toggling video and audio on in seperate functions otherwise the video will get the default controls for some reason
// playTrack function is seperated to prevent accidental looping
function playTrack () {
  currentTrack.play();
  isPlaying = true;
}

function pauseTrack () {
  currentTrack.pause();
  isPlaying = false;
}

function skip () {
  if (trackIndex < tracklist.length -1)
    trackIndex +=1;
  else trackIndex = 0;
  loadTrack(trackIndex);
  playTrack();
}

function back () {}



// Progress bar changed to show current time of song rather than video. May add seek function if I am able to
function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}
// function loop() {
//   audio.loop();
// }

function togglemute() {}

// Add other functionalities here
