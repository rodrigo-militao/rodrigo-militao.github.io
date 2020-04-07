const form = document.getElementById('form');

const getlyrics = (artist, song) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  makesubmition();
});

const makesubmition = async () => {
  const lyricsplace = document.getElementById('lyrics');
  const artist = document.getElementById('artist');
  const song = document.getElementById('song');

  console.log(`https://api.lyrics.ovh/v1/${artist.value}/${song.value}`);

  lyricsplace.innerHTML = 'Aguarde, estamos procurando sua música.';

  const lyricsresponse = await getlyrics(artist.value, song.value);
  const data = await lyricsresponse.json();

  lyricsplace.innerHTML = data.lyrics;
}

