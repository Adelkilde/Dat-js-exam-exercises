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
     <li>${song.artist}: ${song.title} (${song.duration}) <button>Remove</button></li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeSong(song));
  }
}

function removeSong(FuckOuttaHere) {
  console.log(FuckOuttaHere);
  playlist = playlist.filter((song) => FuckOuttaHere !== song);
  displaySongList();
}
