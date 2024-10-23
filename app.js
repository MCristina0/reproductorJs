const playList = [
    {
      title: 'sofia ',
      artist: 'alvaro soler',
      img: 'img/img.jpeg',
      song: 'musica/Alvaro Soler - Sofia(MP3_128K)_1.mp3'
    },
    {
      title: 'debo saber ',
      artist: 'barbie',
      img: 'img/img.jpeg',
      song: 'musica/Debo Saber _ Letra _ Barbie™ como _La Princesa de la Isla_(M4A_128K).m4a'
    },
    {
      title: 'ojos asi  ',
      artist: 'shakira',
      img: 'img/img.jpeg',
      song: 'musica/Shakira - Ojos Así (Official HD Video)(MP3_160K).mp3'
    },
    {
      title: 'chk chk ',
      artist: ' stray kids',
      img: 'img/img.jpeg',
      song: 'musica/Stray Kids _Chk Chk Boom_ Performance Video(MP3_160K).mp3'
    },
    {
      title: 'Dace ',
      artist: ' lyrics',
      img: 'img/img.jpeg',
      song: 'musica/Tones and I - Dance Monkey (Lyrics)(MP3_128K)_1.mp3'
    },  {
        title: 'virtual diva ',
        artist: ' don omar',
        img: 'img/img.jpeg',
        song: 'musica/virtual diva - don omar _ letra(MP3_128K).mp3'
      }
  ]
const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const albumImg = document.getElementById('album-img');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

const play = document.getElementById('play');
const pause = document.getElementById('pause');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const stop = document.getElementById('stop');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');

let currentTrackIndex = 0;

function loadTrack(index) {
  const track = playList[index];
  songTitle.textContent = track.title;
  artistName.textContent = track.artist;
  albumImg.src = track.img;
  audioSource.src = track.song;
  audio.load(); 
}

function playAudio() {
  audio.play();
  play.style.display = 'none';
  pause.style.display = 'inline';
}

function pauseAudio() {
  audio.pause();
  pause.style.display = 'none';
  play.style.display = 'inline';
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  pause.style.display = 'none';
  play.style.display = 'inline';
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + playList.length) % playList.length;
  loadTrack(currentTrackIndex);
  playAudio();
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playList.length;
  loadTrack(currentTrackIndex);
  playAudio();
}

play.addEventListener('click', playAudio);
pause.addEventListener('click', pauseAudio);
stop.addEventListener('click', stopAudio);
prev.addEventListener('click', prevTrack);
next.addEventListener('click', nextTrack);
rewind.addEventListener('click', () => audio.currentTime -= 10)
forward.addEventListener('click', () => audio.currentTime += 10)

window.addEventListener('DOMContentLoaded', () => {
  loadTrack(currentTrackIndex);
  pause.style.display = 'none'; 
  });