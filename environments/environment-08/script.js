"use stricts";

window.addEventListener("load", initApp);
let songs = [
  { artist: "Sleep Token", title: "The Summoning", duration: "3:21", vote: 0 },
  { artist: "Sleep Token", title: "Aqua Regia", duration: "3:21", vote: 0 },
  { artist: "Deftones", title: "Rosemary", duration: "3:21", vote: 0 },
];

function initApp() {
  console.log("JS is running 🚀");
  console.log(songs);
  showSongs();
}

function showSongs() {
  document.querySelector("#songlist").innerHTML = "";
  songs.sort((a, b) => b.vote - a.vote);

  for (const song of songs) {
    const html = /*html*/ `
    <li>${song.artist}: ${song.title} (${song.duration}) <button>👍</button></li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", () => upVoteButton(song));
  }
}

function upVoteButton(song) {
  console.log(song);
  song.vote++;
  showSongs();
  console.log(songs);
}
