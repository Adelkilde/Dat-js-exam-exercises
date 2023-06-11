"use strict";

window.addEventListener("load", initApp);
const songs = [
  { artist: "Nickelback", title: "Rockstar", duration: "3:21", vote: 0 },
  { artist: "Nickelback", title: "Far Away", duration: "3:21", vote: 0 },
  { artist: "Nickelback", title: "Savin' Me", duration: "3:21", vote: 0 },
];

function initApp() {
  console.log("JavaScript is running 🚀");
  console.log(songs);
  displaySongs();
  //   addSong("Nickelback", "Rockstar", "3:21");
}

// function addSong(artist, title, duration) {
//   const newSong = { artist, title, duration };
//   songs.push(newSong);
// }

function displaySongs() {
  document.querySelector("#songlist").innerHTML = "";
  songs.sort((song1, song2) => song2.vote - song1.vote);

  for (const song of songs) {
    const html = /*html*/ ` <li>${song.artist}: ${song.title} (${song.duration})<button>👍</button></li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", () => upVoteButton(song));
  }
}

function upVoteButton(song) {
  console.log(song);
  song.vote++;
  displaySongs();
  console.log(songs);
}
