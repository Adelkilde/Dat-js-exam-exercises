"use strict";

window.addEventListener("load", initApp);
let users = [];

async function initApp() {
  console.log("JS is running 🤘");
  await getUsers();
  console.log(users);
  displayUsers();
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  users = data;
}

function displayUsers() {
  document.querySelector("#userlist").innerHTML = "";

  for (const user of users) {
    if (user.role === "admin") {
      const html = /*html*/ `
    <li>${user.name} (${user.role}), Active: ${user.active}</li>`;
      document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    }
  }
}

// Dette kan også gøres ved at oprette ny funktion, og derefter kalde den i displayUsers()
// function displayUsers() {
//   document.querySelector("#userlist").innerHTML = "";

//   const admins = filterAdmins();

//   for (const user of admins) {
//     const html = /*html*/ `
//     <li>${user.name} (${user.role}), Active: ${user.active}</li>`;
//     document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// function filterAdmins() {
//   const admins = users.filter((user) => user.role === "admin");
//   return admins;
// }
