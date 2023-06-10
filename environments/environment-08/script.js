"use strict";

window.addEventListener("load", initApp);
let songs = [];

async function initApp() {
  console.log("JavaScript is running 🚀");
  await getPlaylist();
  console.log(songs);
  showPlaylist();
}

async function getPlaylist() {
  const response = await fetch("playlist.json");
  const data = await response.json();
  songs = data;
}

function showPlaylist() {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of songs) {
    const html = /*html*/ `
  <li><b>${song.artist}</b>: <b>${song.title}</b> (${song.duration}) <button>Remove</button></li>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeSong(song));
  }
}

function removeSong(remove) {
  console.log(remove);
  songs = songs.filter((song) => remove !== song);
  showPlaylist();
}
