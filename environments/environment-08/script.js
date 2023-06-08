"use strict";

window.addEventListener("load", initApp);
const songs = [];

function initApp() {
  console.log("JavaScript is running 🚀");
  document.querySelector("#add-song-form").addEventListener("submit", addNewSong);
  document.querySelector("#sort-artist").addEventListener("change", sortByChanged);
  document.querySelector("#sort-title").addEventListener("change", sortByChanged);
}

function addNewSong(event) {
  event.preventDefault();
  const form = event.target;
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  newSong(artist, title, duration);
  // songs.sort((song1, song2) => song1.artist.localeCompare(song2.artist));
  sortBy("artist");
}

function newSong(artist, title, duration) {
  const song = { artist, title, duration };
  songs.push(song);
}

function showSongs(listOfSongs) {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of listOfSongs) {
    const html = /*html*/ `
    <li>${song.artist}: ${song.title} (${song.duration})</li>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  }
}

function sortBy(value) {
  if (value == "artist") {
    songs.sort((song1, song2) => song1.artist.localeCompare(song2.artist));
  } else {
    songs.sort((song1, song2) => song1.title.localeCompare(song2.title));
  }
  showSongs(songs);
}

function sortByChanged(event) {
  const selectedSortBy = event.target.value;
  console.log(selectedSortBy);
  sortBy(selectedSortBy);
}

// function sortBy(event) {
//   if (event.target.value == "artist") {
//     songs.sort((song1, song2) => song1.artist.localeCompare(song2.artist));
//   } else {
//     songs.sort((song1, song2) => song1.title.localeCompare(song2.title));
//   }
//   showSongs(songs);
// }

// "use strict";

// window.addEventListener("load", initApp);
// const songs = [];

// function initApp() {
//   console.log("JavaScript is running 🚀");
//   document.querySelector("#add-song-form").addEventListener("submit", submitNewSong);
// document.querySelector("#sort-artist").addEventListener("change", sortBy);
// document.querySelector("#sort-title").addEventListener("change", sortBy);
// }

// function submitNewSong(event) {
//   event.preventDefault();
//   const form = event.target;
//   const artist = form.name.value;
//   const title = form.title.value;
//   const duration = form.duration.value;
//   newSong(artist, title, duration);
//   displaySongs(songs);
// }

// function newSong(artist, title, duration) {
//   const newSong = { artist, title, duration };
//   songs.push(newSong);
// }

// function displaySongs(listOfSongs) {
//   document.querySelector("#songlist").innerHTML = "";

//   for (const song of listOfSongs) {
//     const html = /*html*/ `
//     <li>${song.artist}: ${song.title} (${song.duration})</li>`;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// function sortBy(event) {
//   console.log(event.target.value);
//   if (event.target.value == "artist") {
//     songs.sort((song1, song2) => song1.artist.localeCompare(song2.artist));
//   } else {
//     songs.sort((song1, song2) => song1.title.localeCompare(song2.title));
//   }
//   displaySongs(songs);
// }
