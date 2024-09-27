
import { API_SOCIAL_POSTS } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";
import { authFetch } from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";

// From https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s

const method = "put";

/**
 * Fetches the id of the post.
 * Checks if user is logged in.
 * If logged in - sends the updated post data to the API using the PUT method.
 * @param {object} postData - An object containing the updated post data.
 * @returns {Promise<object} - A promise that resolves to the updated post data from the API.
 * @throws {Error} - Throws an error if no post ID is provided or if the update request fails.
 */
export async function updatePost(postData) {
    if (!postData.id){
        throw new Error("Update requires a post ID");
    }

    const updatePostURL = `${API_SOCIAL_POSTS}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method,
        body:JSON.stringify(postData)
    })

    if (response.ok) {
        alert("Post updated successfully!");
        window.location.href = "/fed2-js2-ca-gydalo/index.html";
    } else {
        alert("Failed to update the post");
    }

    return await response.json();
}

