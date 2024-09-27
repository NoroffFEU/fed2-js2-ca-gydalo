/*export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {} */


import { API_SOCIAL_POSTS } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";
import { authFetch } from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";


/**
 * Fetches the posts from the API.
 * @throws {error}
 */
export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_POSTS}`;

    try {
        const response = await authFetch(updatePostURL);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}

/**
 * Fetches a single post from the API based on the id of the post.
 */
export async function getPost(id) {
    if (!id){
        throw new Error("Get post requires a post ID");
    }

    const getPostURL = `${API_SOCIAL_POSTS}/${id}`;
    console.log("Fetching post from:", getPostURL);

    const response = await authFetch(getPostURL, {
        
    })

    const result = await response.json();
    const post = result.data;
    return post;
}

