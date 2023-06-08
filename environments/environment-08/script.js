"use strict";

window.addEventListener("load", initApp);
const songs = [];

function initApp() {
  console.log("JavaScript is running 🚀");
  newSong("Colter Wall", "Saskatchewan in 1881", "3:21");
  newSong("Coldplay", "The Scientist", "4:21");
  newSong("Slipknot", "Iowa", "3:21");
  console.log(songs);
  displaySongList();
}

function newSong(artist, title, duration) {
  const song = { artist, title, duration };
  songs.push(song);
}

function displaySongList() {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of songs) {
    const html = /*html*/ `
    <li>${song.artist}: ${song.title} (${song.duration})</li>
    <button>Upvote 👍</button>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  }
}

function upVoteSong() {}
