"use strict";

window.addEventListener("load", initApp);
let animals = [];

function initApp() {
    console.log("JavaScript is running 🚀");
    createAnimal("Bo3", "Hest", 4);
    document.querySelector("#create-form").addEventListener("submit", createNewButton)
}

function createAnimal(name, type, age) {
    const animal = {
        name,
        type,
        age
    }
    console.log(animal);
    animals.push(animal);
    console.log(animals);
}

function createNewButton(event) {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    const name = form.name.value;
    const type = form.type.value;
    const age = form.age.value;
    
    createAnimal(name, type, age);
    displayAnimalList();
    form.reset();
}

function displayAnimalList() {
    const listContainer = document.querySelector("#list-container tbody");
    listContainer.innerHTML = ""; // Clear the existing list
  
    // Sort animals list alphabetically by name
    const sortedAnimals = animals.slice().sort((a, b) => a.name.localeCompare(b.name));
  
    // Generate HTML for each animal and append to the list container
    sortedAnimals.forEach(animal => {
      const row = document.createElement("tr");
      const { name, type, age } = animal;
      const rowData = [name, type, age];
  
      rowData.forEach(data => {
        const cell = document.createElement("td");
        cell.textContent = data;
        row.appendChild(cell);
      });
  
      listContainer.appendChild(row);
    });
  }


// function displayAnimals() {
//     const tbody = document.querySelector("#tbody");

//         for (const animal of animals) {
//             const html = /*html*/`
//             <tr>
//                 <td>${animal.name.value}</td>
//                 <td>${animal.type.value}</td>
//                 <td>${animal.age.value}</td>
//             </tr>
//         `;
//         tbody.insertAdjacentHTML("beforeend", html);
//     }
// }