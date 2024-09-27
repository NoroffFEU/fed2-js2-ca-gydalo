import { authGuard } from "/fed2-js2-ca-gydalo/src/js/utilities/authGuard.js";
import { getPosts } from "/fed2-js2-ca-gydalo/src/js/api/post/index.js";


authGuard();


/**
 * I have used this for help many places in the assignment: https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s
 */

/**
 * Fetches the posts and the container from the html page. 
 * Then lists the posts on the homepage.
 */
async function loadPosts() {
    const postContainer = document.getElementById('post-container');
    
    const posts = await getPosts();

    console.log("Fetched posts:", posts);

    const postList = posts.data || posts;



    if (postList.length > 0) {
        const last12Posts = getLast12Posts(postList); 
        renderPostTemplates(last12Posts, postContainer); 
        renderPostTemplates(postList, postContainer); 
    } else {
        postContainer.innerHTML = '<p>No posts found.</p>'; 
    }
}

function getLast12Posts(posts) {
    return posts.slice(-12);
}

document.addEventListener("DOMContentLoaded", loadPosts);

export function postTemplateA(postData) {
    return `<div class="post" id=${postData.id}>${postData.title}</div>`;
}

export function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;

    if (postData.media) {
        const img = document.createElement('img');
        img.setAttribute("src", postData.media.url);
        img.alt = `Image from ${postData.title}`;
        post.append(img);
    }



    post.addEventListener("click", () => {
        const targetUrl = `/fed2-js2-ca-gydalo/post/index.html?id=${postData.id}`;
        console.log(`Navigating to: ${targetUrl}`);
        window.location.href = targetUrl;
    });

    return post;
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
}

