/*export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {} */


import { API_SOCIAL_POSTS_USER } from "../constants";
import { authFetch } from "../auth/key";


export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_POSTS_USER}`;

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

export async function getPost(id) {
    if (!id){
        throw new Error("Get post requires a post ID");
    }

    const getPostURL = `${API_SOCIAL_POSTS_USER}/${id}`;
    console.log("Fetching post from:", getPostURL);

    const response = await authFetch(getPostURL, {
        
    })

    const result = await response.json();
    const post = result.data;
    return post;
}

