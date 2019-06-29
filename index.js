// Import stylesheets
import './style.css';
import videojs from 'video.js';

var options = {
  controls: true,
  autoplay: true,
  preload: 'auto',
  liveui: true,
};
var isPlayerReady = false;

var player = videojs('videoPlayer', options, function onPlayerReady() {
  videojs.log('Player is ready!');
  isPlayerReady = true;
});

function play() {
  if (isPlayerReady === false) {
    alert('The player is not ready yet.');
    return;
  }
  var urlInputElement = document.getElementById('urlInput');
  var url = urlInputElement.value;
  var contentType = 'video/mp4';
  if (url.includes('.m3u8')) {
    contentType = 'application/x-mpegURL';
  }
  player.src({type: contentType, src: url});
}

document.getElementById('playButton').addEventListener("click", play);