//export async function createPost({ title, body, tags, media }) {}
import { API_SOCIAL_POSTS } from "../constants";
import { authFetch } from "../auth/key";


const method = "POST";

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_POSTS;

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })
    
    if (response.ok) {
        alert("Post created successfully!");
       window.location.href = "/index.html";
    } else {
        alert("Failed to create the post");
    }
    return await response.json();


}
