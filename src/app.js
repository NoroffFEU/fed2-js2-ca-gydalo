import "./css/style.css";

import router from "./js/router";

await router(window.location.pathname);


console.log("app.js loaded");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");

    const form = document.querySelector("#createPost");
    console.log("Form selected:", form); 
})
