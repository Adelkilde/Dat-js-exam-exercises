import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log("JavaScript is running 🚀 ");
  displayCourses(courses);
  document.querySelector("#select-filter-ects").addEventListener("change", filterByOption);
}

function displayCourses(courses) {
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of courses) {
    const html = /*html*/ `
        <li><b>Course:</b> ${course.name}, <b>ECTS:</b> ${course.ectsPoints}</li>
        <li>Course start: ${course.startDate}, Course end: ${course.endDate}</li>
        <li>Teacher: ${course.teacher}</li>
        <li>Max Students: ${course.maxStudents}</li>
        <br>`;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

function filterByOption(event) {
  const selectedECTS = event.target.value;
  //   const filteredCourses = courses.filter((course) => course.ectsPoints.toString() === selectedECTS);

  let filteredCourses;
  if (selectedECTS === "0") {
    filteredCourses = courses;
  } else {
    filteredCourses = courses.filter((course) => course.ectsPoints.toString() === selectedECTS);
  }
  displayCourses(filteredCourses);
}

// function filterByOption(event) {
//   const selectedECTS = event.target.value;
//   let filteredCourses;

//   if (selectedECTS === "20") {
//     filteredCourses = courses.filter((course) => course.ectsPoints);
//   } else if (selectedECTS === "15") {
//     filteredCourses = courses.filter((course) => course.ectsPoints === 15);
//   } else if (selectedECTS === "10") {
//     filteredCourses = courses.filter((course) => course.ectsPoints === 10);
//   } else if (selectedECTS === "5") {
//     filteredCourses = courses.filter((course) => course.ectsPoints === 5);
//   }
//   displayCourses(filteredCourses);
// }
