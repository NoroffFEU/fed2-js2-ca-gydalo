import { authGuard } from "/fed2-js2-ca-gydalo/src/js/utilities/authGuard.js";
import { getPosts } from "/fed2-js2-ca-gydalo/src/js/api/post/index.js";



https://norofffeu.github.io/fed2-js2-ca-gydalo/src/js/router/views/fed2-js2-ca-gydalo/src/js/utilities/authGuard.js

authGuard();

// https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s


async function loadPosts() {
    const postContainer = document.getElementById('post-container');
    
    const posts = await getPosts();

    console.log("Fetched posts:", posts);

    const postList = posts.data || posts;

    if (postList.length > 0) {
        renderPostTemplates(postList, postContainer); 
    } else {
        postContainer.innerHTML = '<p>No posts found.</p>'; 
    }
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
        const targetUrl = `/post/index.html?id=${postData.id}`;
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

