"use strict";

window.addEventListener("load", initApp);
const students = [];

function initApp() {
  console.log("JS is running 🚀");
  document.querySelector("#create-student-form").addEventListener("submit", addStudent);
  console.log(students);
}

function addStudent(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);
  createStudent(name, email, age);
  console.log(students);
  showStudents();
}

function createStudent(name, email, age) {
  const newStudent = { name, email, age };
  students.push(newStudent);
}

function showStudents() {
  document.querySelector("#students-table-body").innerHTML = "";
  students.sort((a, b) => a.age - b.age);

  for (const student of students) {
    const html = /*html*/ `
      <tr>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.age}</td>
      </tr>`;
    document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
  }
}
