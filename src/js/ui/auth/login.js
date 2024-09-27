import { login } from "/fed2-js2-ca-gydalo/src/js/api/auth/login.js";

//export async function onLogin(event) {}
// From https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s

/**
 * Selects the login form and adds an eventlistener to handle the login.
 * When the form is sent it prevents default behavior.
 */
export function setLoginFormListener () {
    const form = document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
        
            login(profile)
        })
    }
}
