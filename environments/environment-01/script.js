"use strict";

window.addEventListener("load", initApp)
let users = []

async function initApp() {
    console.log("JavaScript is running 🚀");
    await getUsers();
    displayUsers();
    countRoles();
}

async function getUsers() {
    const response = await fetch("users.json");
    const json = await response.json();
    users = json;
}

function displayUsers() {
    const userList = document.getElementById("userlist");
    userList.innerHTML = "";

    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.name} (${user.role})`;
        userList.appendChild(listItem);
    });
}

function countRoles() {
    const adminCount = users.filter(user => user.role === "admin").length
    const userCount = users.filter(user => user.role === "user").length
    const guestCount = users.filter(user => user.role === "guest").length

    const adminCountElement = document.getElementById("admin-count");
    const userCountElement = document.getElementById("user-count");
    const guestCountElement = document.getElementById("guest-count");

    adminCountElement.textContent = adminCount;
    userCountElement.textContent = userCount;
    guestCountElement.textContent = guestCount;
}