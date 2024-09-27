//export async function createPost({ title, body, tags, media }) {}
import { API_SOCIAL_POSTS } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";
import { authFetch } from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";


const method = "POST";

/**
 * Checks if user have authorization to create a post.
 * If the user is logged in it creates a new post by sending the provided post data to the API.
 * @param {object} - The data for the post.
 * @throws {error} - Throws error if failed to create post
 */
export async function createPost(postData) {
    const createPostURL = API_SOCIAL_POSTS;

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })
    
    if (response.ok) {
        alert("Post created successfully!");
       window.location.href = "/fed2-js2-ca-gydalo/index.html";
    } else {
        alert("Failed to create the post");
    }
    return await response.json();


}
