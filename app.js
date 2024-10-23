import { playList } from 'playList.js'; // Corrige la ruta de importación

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');



// Eventos de control
play.addEventListener('click', () => audio.play());

pause.addEventListener('click', () => audio.pause());

rewind.addEventListener('click', () => {
  audio.currentTime -= 10;
});

forward.addEventListener('click', () => {
  audio.currentTime += 10;
});

stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0; ``
});

let currentSongIndex = 0;

const img = document.querySelector('.player__img'); 
const title = document.querySelector('.player__song');
const artist = document.querySelector('.player__artist');

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  img.src = song.img;
  audio.src = song.song;
}


loadSong(playList[currentSongIndex]);