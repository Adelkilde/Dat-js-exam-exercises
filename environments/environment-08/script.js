"use strict";

window.addEventListener("load", initApp);
const songs = [
  { artist: "Deftones", title: "Rosemary", duration: "3:21" },
  { artist: "Deftones", title: "Entombed", duration: "3:21" },
  { artist: "Slipknot", title: "Iowa", duration: "3:21" },
  { artist: "Nickelback", title: "Far Away", duration: "3:21" },
  { artist: "Nickelback", title: "Savin' Me", duration: "3:21" },
];

function initApp() {
  console.log("JS is running 🚀");
  document.querySelector("#add-song-form").addEventListener("submit", addSong);
  document.querySelector("#sort-songs-form").addEventListener("change", sortByButton);
  songs.sort((a, b) => a.artist.localeCompare(b.artist));
  console.log(songs);
  displaySongs();
}

function addSong(event) {
  event.preventDefault();
  const form = event.target;
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  createSong(artist, title, duration);
  console.log(songs);
  displaySongs();
}

function createSong(artist, title, duration) {
  const newSong = { artist, title, duration };
  songs.push(newSong);
}

function displaySongs() {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of songs) {
    const html = /*html*/ `
            <li>${song.artist}: ${song.title} (${song.duration})</li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  }
}

function sortByButton(event) {
  if (event.target.value == "artist") {
    songs.sort((a, b) => a.artist.localeCompare(b.artist));
  } else {
    songs.sort((a, b) => a.title.localeCompare(b.title));
  }
  displaySongs();
}
