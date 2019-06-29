// Import stylesheets
import './style.css';
import videojs from 'video.js';

var options = {};

var player = videojs('videoPlayer', options, function onPlayerReady() {
  videojs.log('Player is ready!');
});

function play() {
  var inputUrlTextElement = document.getElementById('input-url');
  var url = inputUrlTextElement.innerText;
  alert(url);
}