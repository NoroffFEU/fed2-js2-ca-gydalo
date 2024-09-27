//export async function createPost({ title, body, tags, media }) {}
import { API_SOCIAL_POSTS } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";
import { authFetch } from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";

/**
 * Checks if user have authorization to create a post.
 * If the user is logged in 
 */
const method = "POST";

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
