import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);
const PLAYED_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
  localStorage.setItem(PLAYED_TIME, event.seconds);
}

const savedTime = localStorage.getItem(PLAYED_TIME);

checkPlayedTime();

function checkPlayedTime() {
  if (savedTime) {
    player.setCurrentTime(JSON.parse(savedTime));
  }
}
