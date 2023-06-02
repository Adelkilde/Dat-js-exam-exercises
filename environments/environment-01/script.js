"use strict";

window.addEventListener("load", initApp);
let users = [];

async function initApp() {
    console.log("JavaScript is running! 🚀");
    await getUsers();
    showActiveUsers();
}

async function getUsers() {
    const response = await fetch("users.json");
    const data = response.json
    return data;
}

function showActiveUsers() {
    const userList = document.getElementById("userlist");
    userList.innerHTML = "";
    const activeUsers = users.filter(user => user.active);

    for (const user of activeUsers) {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    }
}

function createUser(name, active, role) {
    const newUser = {
        name,
        active,
        role
    }
users.push(newUser);
showActiveUsers();
}

createUser("Boy", true, "user");
createUser("Man", false, "guest");
createUser("Kratos", true, "admin");