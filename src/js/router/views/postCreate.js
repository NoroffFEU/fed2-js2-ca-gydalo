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


// Make it voluntary to put a picture in the post


/*
export function setCreatePostFormListener () {
    const form = document.querySelector("#createPost");

    if (form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log('submitted')
            const form = event.target;
            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData.entries());

            const mediaAsObject = setMediaObject(formValues.mediaURL, formValues.mediaALT);

            const postData = {
                title: formValues.title,
                media: mediaAsObject,
                body: formValues.body, 
            }

            createPost(postData)
                .then(response => {
                    console.log("Post created successfully:", response);
                })
                .catch(error => {
                    console.error("Error creating post:", error);
                });
        });
    } else {
        console.error('form element not found')
    }
}

export function stringToArray(inputString) {
    return inputString.trim().split(",").map(item => item.trim());
  }
  
  export function setMediaObject(stringUrl, stringAlt) {
   const media = {
      url: stringUrl,
      alt: stringAlt
    }
    return media; 
  }
*/

  /*
  createPost({
    title: 'Hello, this is my post',
    body: 'Bodyayayay'
  });


/*
export function stringToArray(inputString) {
    return inputString.trim().split(",").map(item => item.trim());
  }
  
  export function setMediaObject(stringUrl, stringAlt) {
   const media = {
      url: stringUrl,
      alt: stringAlt
    }
    return media; 
  }
*/
