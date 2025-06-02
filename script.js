// Get elements
const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewindBtn = document.querySelector('.rewind');
const forwardBtn = document.querySelector('.forward');
const volumeSlider = document.querySelector('.volume');
const playbackSpeedSlider = document.querySelector('.playbackSpeed');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function rewind() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}

function forward() {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
}

function handleVolumeChange() {
  video.volume = this.value;
}

