"use strict";

window.addEventListener("load", initApp);
const songs = [
  { artist: "Coldplay", title: "The Scientist", duration: "4:21", vote: 0 },
  { artist: "Colter Wall", title: "Saskatchewan in 1881", duration: "3:21", vote: 0 },
  { artist: "Slipknot", title: "Iowa", duration: "6:32", vote: 0 },
];

function initApp() {
  console.log("JavaScript is running 🚀");
  displaySongList();
}

function displaySongList() {
  document.querySelector("#songlist").innerHTML = "";
  songs.sort((song1, song2) => song2.vote - song1.vote);

  for (const song of songs) {
    const html = /*html*/ `
    <li>${song.artist}: ${song.title} (${song.duration}) <button>Upvote 👍</button></li>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", () => upVoteSong(song));
  }
}

function upVoteSong(song) {
  console.log(song);
  song.vote++;
  displaySongList();
  console.log(songs);
}

// "use strict";

// window.addEventListener("load", initApp);
// const songs = [];

// function initApp() {
//   console.log("JavaScript is running 🚀");
//   newSong("Colter Wall", "Saskatchewan in 1881", "3:21");
//   newSong("Coldplay", "The Scientist", "4:21");
//   newSong("Slipknot", "Iowa", "3:21");
//   console.log(songs);
//   displaySongList();
// }

// function newSong(artist, title, duration) {
//   const song = { artist, title, duration };
//   songs.push(song);
// }

// function displaySongList() {
//   document.querySelector("#songlist").innerHTML = "";

//   for (const song of songs) {
//     const html = /*html*/ `
//     <li>${song.artist}: ${song.title} (${song.duration}) <button>Upvote 👍</button></li>
//     `;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// function upVoteSong() {}
