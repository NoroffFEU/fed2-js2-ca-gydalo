// import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard"; 

authGuard();


/*
const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);  */

import { createPost } from "../../api/post/create";

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

