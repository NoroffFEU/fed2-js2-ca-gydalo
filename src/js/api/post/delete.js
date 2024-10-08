export async function deletePost(id) {}

import { API_SOCIAL_POSTS } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";
import { authFetch } from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";


// From https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s

const method = "delete";

/**
 * Fetches the id of a post and removes the post.
 * Sends a delete request to the API and, upon success, redirects the user to the homepage.
 * @param {string|number} id 
 */
export async function removePost(id) {
    if (!id){
        throw new Error("Delete requires a post ID");
    }
    
    const deletePostURL = `${API_SOCIAL_POSTS}/${id}`;

    const response = await authFetch(deletePostURL, {
        method
    })

    alert("You have deleted the post");

    window.location.href = "/fed2-js2-ca-gydalo/index.html";


}


