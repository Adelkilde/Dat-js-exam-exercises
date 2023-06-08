"use strict";

window.addEventListener("load", initApp);
let playlist = [];

async function initApp() {
  console.log("Jaffa");
  await loadPlaylist();
  console.log(playlist);
  displaySongList();
}

async function loadPlaylist() {
  const response = await fetch("playlist.json");
  const data = await response.json();
  playlist = data;
}

function displaySongList() {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of playlist) {
    const html = /*html*/ `
     <li>${song.artist}: ${song.title} (${song.duration})</li>
     <button id="removeButton">Remove</button>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  }
}
