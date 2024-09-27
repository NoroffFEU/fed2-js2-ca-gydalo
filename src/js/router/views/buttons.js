import { isLoggedIn } from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";
import { getPostIdFromUrl } from "/fed2-js2-ca-gydalo/src/js/router/views/post.js";
import * as postMethods from "/fed2-js2-ca-gydalo/src/js/api/post/index.js";



/**
 * Creates a button for creating a new post if the user is logged in. If the user is not logged in, the button will not appear.
 */
function renderCreateButton() {
    if (isLoggedIn()) {
        const container = document.querySelector("#createButton");

        if (container) { 
            const button = document.createElement("button");
            button.innerText = "Create new Post";
            button.addEventListener("click", () => {
                window.location.href = `/fed2-js2-ca-gydalo/post/create/index.html`;
            });
            
            container.appendChild(button);
        }
    }
}

renderCreateButton();

/**
 * Creates a button for removing a post if the user is logged in. If the user is not logged in, the button will not appear.
 */
function renderRemoveButton() {
    if (window.location.pathname === "/fed2-js2-ca-gydalo/post/index.html" && isLoggedIn()) {
        const container = document.querySelector("#deleteButton");
        const id = getPostIdFromUrl(); 

        if (container, id) { 
            const button = document.createElement("button");
            button.innerText = "Delete Post";
            button.addEventListener("click", () => {
                postMethods.removePost(id);
            });

            container.appendChild(button);

        } else {
            if (!container) {
                console.error("No container found with the selector #deleteButton");
            }
            if (!id) {
                console.error("No post ID found in URL");
            }
        }
    }
}

renderRemoveButton(); 

/**
 * Creates a button for updating a post if the user is logged in. If the user is not logged in, the button will not appear.
 */
function renderEditButton() {
    if (window.location.pathname === "/fed2-js2-ca-gydalo/post/index.html" && isLoggedIn()) {
        const container = document.querySelector("#editButton");
        const id = getPostIdFromUrl(); 

        if (container, id) { 
            const button = document.createElement("button");
            button.innerText = "Edit Post";
            button.addEventListener("click", () => {
                window.location.href = `/fed2-js2-ca-gydalo/post/edit/index.html?id=${id}`;
            });
            container.appendChild(button);
        }
    }
}


renderEditButton(); 

/**
 * Creates a button for logout if the user is logged in. If the user is not logged in, the button will not appear.
 */
function logOut() {
    if (isLoggedIn()) {
        const container = document.querySelector("#logOutButton");

    if (container) {
        const button = document.createElement("button");
        button.innerText = "Logout";
        button.addEventListener("click", () => {
            localStorage.clear();

            alert("You are now logged out");
            window.location.href = "/fed2-js2-ca-gydalo/index.html";
        });

        container.appendChild(button);
    }
}
}


logOut();


/**
 * Creates a button for login if the user is not logged in. If the user is logged in, the button will not appear.
 */
function loginButtonNotLoggedIn() {
    if (isLoggedIn()) {
    } else {
        const container = document.querySelector("#notLoggedIn");

        if (container) { 
            const buttonLogin = document.createElement("button");
            buttonLogin.innerText = "Login";
            buttonLogin.addEventListener("click", () => {
                window.location.href = `/fed2-js2-ca-gydalo/auth/login/index.html`;

            });
            container.appendChild(buttonLogin);
        }
        
}
}

loginButtonNotLoggedIn();

/**
 * Creates a button for register if the user is not logged in. If the user is logged in, the button will not appear.
 */
function registerButtonNotLoggedIn() {
    if (isLoggedIn()) {
    } else {
        const container = document.querySelector("#notLoggedIn");

        if (container) { 
            const buttonRegister = document.createElement("button");
            buttonRegister.innerText = "Register";
            buttonRegister.addEventListener("click", () => {
                window.location.href = `/fed2-js2-ca-gydalo/auth/register/index.html`;

            });
            container.appendChild(buttonRegister);
        }
        
}
}

registerButtonNotLoggedIn();
