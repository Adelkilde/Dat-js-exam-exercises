"use strict";

window.addEventListener("load", initApp);
let users = [];

async function initApp() {
  console.log("JavaScript is running 🚀");
  users = await getUsers();
  console.log(users);
  displayUsers();
  countRoles();
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  console.log(data);
  return data;
}

function displayUsers() {
  for (const user of users) {
    const html = /*html*/ `
    <li>${user.name} (${user.active}) (${user.role})</li>`;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

function countRoles() {
  let adminCount = 0;
  let userCount = 0;
  let guestCount = 0;

  for (const user of users) {
    if (user.role === "admin") {
      adminCount++;
    } else if (user.role === "user") {
      userCount++;
    } else if (user.role === "guest") {
      guestCount++;
    }
  }

  document.getElementById("admin-count").textContent = adminCount;
  document.getElementById("user-count").textContent = userCount;
  document.getElementById("guest-count").textContent = guestCount;
}

/* Lavet før møde med Race d.05/06 */
// function countRoles() {
//   const adminCount = users.filter((user) => user.role === "admin").length;
//   const userCount = users.filter((user) => user.role === "user").length;
//   const guestCount = users.filter((user) => user.role === "guest").length;

//   document.getElementById("admin-count").textContent = adminCount;
//   document.getElementById("user-count").textContent = userCount;
//   document.getElementById("guest-count").textContent = guestCount;
// }
