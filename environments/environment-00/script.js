"use strict";

window.addEventListener("load", initApp);

function initApp() {
    console.log("JavaScript is Running 🚀");
    hideResults();
    document.querySelector("#btn-knap").addEventListener("click", clicked)
}

function clicked() {
    console.log("Det virker");
    document.querySelector("#result_failure").classList.add("hide")
    document.querySelector("#result_success").classList.add("show")

}

function hideResults() {
    const hideSuccess = document.querySelector("#result_success").classList.add("hide")
    const hideFailure = document.querySelector("#result_failure").classList.add("hide")
}