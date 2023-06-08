"use strict";

window.addEventListener("load", initApp);
const students = [];

function initApp() {
  console.log("JavaScript is running 🚀");
  document.querySelector("#create-student-form").addEventListener("submit", submitNewStudent);
  createStudent("Børge", "børa@stud.kea.dk", 23);
  console.log(students);
}

function submitNewStudent(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);
  createStudent(name, email, age);
  displayStudents(students);
}

function createStudent(name, email, age) {
  const newStudent = { name, email, age };
  students.push(newStudent);
}

function displayStudents(listOfStudents) {
  document.querySelector("#students-table-body").innerHTML = "";
  listOfStudents.sort((student1, student2) => student1.name.localeCompare(student2.name));

  for (const student of listOfStudents) {
    if (student.age > 18 - 1) {
      const html = /*html*/ `
              <td>${student.name}</td>
              <td>${student.email}</td>
              <td>${student.age}</td>`;
      document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
    }
  }
}
