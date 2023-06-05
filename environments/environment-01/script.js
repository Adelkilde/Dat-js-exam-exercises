"use strict";

window.addEventListener("load", initApp);
let users = [];

async function initApp() {
  await getUsers();
  displayUsers();
}

async function getUsers() {
  const response = await fetch("users.json");
  const json = await response.json();
  users = json;
}

function displayUsers() {
  for (const user of users) {
    const html = /*html*/ `
        <li>${user.name} (${user.role}), Active: ${user.active}</li>`;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

// function displayUsers() {
//     const userList = document.querySelector("#userlist");
//     userList.innerHTML = "";

//     const adminUsers = users.filter(user => user.role === "admin")

//     adminUsers.forEach(user => {
//         const listItem = document.createElement("li")
//         const userName = document.createTextNode(`${user.name} (${user.active ? 'Active' : 'Inactive'})`);
//         listItem.appendChild(userName);
//         userList.appendChild(listItem);
//     })
// }
