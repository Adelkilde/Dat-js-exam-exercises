"use strict";

window.addEventListener("load", initApp);
const students = [];

function initApp() {
  console.log("JavaScript is running 🚀");
  document.querySelector("#create-student-form").addEventListener("submit", addStudent);
  createStudent("John", "jobe@stud.kea.dk", 23);
  createStudent("John", "joew@stud.kea.dk", 23);
  createStudent("John", "jote@stud.kea.dk", 23);
  createStudent("John", "joe@stud.kea.dk", 23);
  console.log(students);
}

function addStudent(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);

  if (!checkEmail(email)) {
    console.log("Ugyldig email");
    return;
  } else {
    createStudent(name, email, age);
  }
  console.log(students);
}

function createStudent(name, email, age) {
  const newStudent = { name, email, age };
  students.push(newStudent);
}

function checkEmail(email) {
  const requiredEmail = "@stud.kea.dk";
  const atIndex = email.indexOf("@");

  if (atIndex >= 4 && email.substring(atIndex) === requiredEmail) {
    return true;
  } else {
    const index = students.findIndex((student) => student.email === email);
    if (index !== -1) {
      students.splice(index, 1);
    }
    return false;
  }
}
