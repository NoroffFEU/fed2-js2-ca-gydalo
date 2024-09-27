import { authGuard } from "/fed2-js2-ca-gydalo/src/js/utilities/authGuard.js";
import { getPosts } from "/fed2-js2-ca-gydalo/src/js/api/post/index.js";


authGuard();


/**
 * I have used this for help many places in the assignment: https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s
 */

/**
 * Fetches the posts and the container from the html page. 
 * Then lists the 12 latest posts on the homepage.
 */
async function loadPosts() {
    const postContainer = document.getElementById('post-container');
    
    const posts = await getPosts();

    console.log("Fetched posts:", posts);

    const postList = posts.data || posts;



    if (Array.isArray(postList) && postList.length > 0) {
        const last12Posts = getLast12Posts(postList); 

        console.log("Last 12 posts:", last12Posts); 

       
        renderPostTemplates(last12Posts, postContainer);
    } else {
        postContainer.innerHTML = '<p>No posts found.</p>'; 
    }
}

/**
 * Function to filter the last 12 posts.
 * @param {Array} posts - Array of posts to filter.
 * @returns {Array} - Array containing the last 12 posts.
 */
function getLast12Posts(posts) {
    return posts.slice(-12);
}

document.addEventListener("DOMContentLoaded", loadPosts);

/**
 * Makes a post template in string form.
 * @param {object} postData - Data for a single post
 * @returns {string} - HTML string for the post.
 */
export function postTemplateA(postData) {
    return `<div class="post" id=${postData.id}>${postData.title}</div>`;
}

/**
 * Makes an HTML element containing postdata. 
 * If there is an image link it will also include this and show it on the page.
 * If u click the post u will be redirected to the post page. 
 * @param {object} postData - Data for the post.
 * @returns 
 */
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

/**
 * Appends a single post to the parent container using the post template.
 * @param {object} postData - Data for one post.
 */
export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}

/**
 * Appends multiple posts to the parent container using the post template.
 * @param {array} postDataList - List of post data.
 */
export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
}

