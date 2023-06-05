"use strict";

window.addEventListener("load", initApp);
let users = [];

async function initApp() {
  console.log("Data 🚀");
  await getUsers();
  showUsers();
  createUser("Yørgen", true, "guest");
  createUser("Urt", true, "admin");
  createUser("Per", false, "guest");
  console.log(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  users = await response.json();
  return users;
}

function showUsers() {
  // const activeUsers = users.filter(user => (user.active));
  // console.log(activeUsers);
  document.querySelector("#userlist").innerHTML = "";
  for (const user of users) {
    if (user.active) {
      const html = /*html*/ `
        <li>${user.name} (${user.active}) (${user.role})</li>
        `;
      document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    }
  }
}

function createUser(name, active, role) {
  const user = {
    name,
    active,
    role,
  };

  users.push(user);
  showUsers();
}
