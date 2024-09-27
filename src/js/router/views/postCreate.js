// import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "/fed2-js2-ca-gydalo/src/js/utilities/authGuard.js"; 

authGuard();


import { createPost } from "/fed2-js2-ca-gydalo/src/js/api/post/create.js";

const form = document.querySelector("#createPost");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Form submitted!");

        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());

        createPost({
            title: formValues.title,
            body: formValues.body,
            media: {
                url: formValues.mediaURL,
                alt: formValues.mediaALT
            }
        });
    });
} else {
    console.error("Form not found");
}

