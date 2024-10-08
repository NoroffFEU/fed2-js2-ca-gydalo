//export async function login({ email, password }) {}

import * as storage from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";
import { API_AUTH_LOGIN } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";

const method = "POST";

/**
 * Attempts to log the user in by sending their profile information to the API.
 * If the login is successful, the token and profile data are saved to storage.
 * The user is then redirected to the homepage.
 * @param {object} profile 
 * @throws {error} - Throws error if username or password is wrong or doesn't exist.
 */
export async function login(profile) {
    const loginURL = API_AUTH_LOGIN;
    const body = JSON.stringify(profile);
    try {
        const response = await fetch(loginURL, {
            headers: {
                "Content-Type": "application/json"
            },
            method,
            body
        });

        if (!response.ok) {
            throw new Error("Username or password is incorrect");
        }

    const jsonResponse = await response.json();
    const { accessToken, ...user } = jsonResponse.data; 

    storage.save("token", accessToken);
    storage.save("profile", user);

    alert("You are now logged in");

    window.location.href = "/fed2-js2-ca-gydalo/index.html";
} catch (error) {
    alert("Wrong username or password");
}

}