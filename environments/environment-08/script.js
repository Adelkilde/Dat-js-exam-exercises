"use strict";

window.addEventListener("load", initApp);
let playlist = [];

async function initApp() {
  console.log("JavaScript is running 🚀");
  await loadPlaylist();
  showPlaylist();
  document.querySelector("#removeButton").addEventListener("click", () => {
    removeSong();
  });
}

async function loadPlaylist() {
  const response = await fetch("playlist.json");
  const data = await response.json();
  playlist = data;
}

function addNewSong(event) {
  event.preventDefault();
  const form = event.target;
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  newSong(artist, title, duration);
  showPlaylist();
  form.reset();
}

function newSong(artist, title, duration) {
  const song = { artist, title, duration };
  playlist.push(song);
}

function removeSong(song) {
  const index = playlist.indexOf(song);
  if (index > -1) {
    playlist.splice(index, 1);
  }
  showPlaylist();
}

function showPlaylist() {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of playlist) {
    const html = /*html*/ `
     <li>${song.artist}: ${song.title} (${song.duration})</li>
     <button id="removeButton">Remove</button>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  }
}

// const listItem = document.createElement("li");
// listItem.textContent = `${song.artist}: ${song.title} (${song.duration})`;

// const removeButton = document.createElement("button");
// removeButton.textContent = "Remove";
// removeButton.addEventListener("click", () => {
//   removeSong(song);
// });

// listItem.appendChild(removeButton);
// songList.appendChild(listItem);

// function showPlaylist() {
//   document.querySelector("#songlist").innerHTML = "";

//   for (const song of playlist) {
//     const html = /*html*/ `
//     <li>${song.artist}: ${song.title} (${song.duration})</li>`;
//     document.querySelector("#songslist").insertAdjacentHTML("beforeend", html);
//   }
// }
