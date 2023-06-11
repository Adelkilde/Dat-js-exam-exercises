"use strict";

window.addEventListener("load", initApp);
const songs = [
  { artist: "Deftones", title: "Rosemary", duration: "3:21" },
  { artist: "Deftones", title: "Entombed", duration: "3:21" },
  { artist: "Nickelback", title: "Far Away", duration: "3:21" },
  { artist: "Nickelback", title: "Savin' Me", duration: "3:21" },
  { artist: "Slipknot", title: "Iowa", duration: "3:21" },
];

function initApp() {
  console.log("JavaScript is running 🤘");
  document.querySelector("#add-song-form").addEventListener("submit", addSong);
  document.querySelector("#sort-songs-form").addEventListener("change", sortByClicked);
  displaySongs();
}

function addSong(event) {
  event.preventDefault();
  const form = event.target;
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  createSong(artist, title, duration);
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

function sortByClicked(event) {
  if (event.target.value == "artist") {
    songs.sort((song1, song2) => song1.artist.localeCompare(song2.artist));
  } else {
    songs.sort((song1, song2) => song1.title.localeCompare(song2.title));
  }
  displaySongs();
}
