import { getPost } from "/fed2-js2-ca-gydalo/src/js/api/post/index.js";



/**
 * Fetches the posts id from the URL.
 * @returns {string|null} - Returns post id if it exists, otherwise returns null.
 */
export function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id'); 
    return postId;
}

const postId = getPostIdFromUrl();
if (postId) {
    getPost(postId)
        .then(postData => {
            renderPostData(postData);
        })
        .catch(error => {
            console.error("Error fetching post:", error); 
        });
} 

/**
 * Creates elements on the HTML page for the data form a single post. 
 * @param {object} postData - The data object for a single post. 
 */
function renderPostData(postData) {
    const postContainer = document.getElementById('post-container');

    if (!postContainer) {
        console.error("Post container not found");
        return;
    }

    const postTitle = document.createElement('h2');
    postTitle.textContent = postData.title;

    const postBody = document.createElement('p');
    postBody.textContent = postData.body;

    const postImage = document.createElement('img');
    postImage.setAttribute("src", postData.media.url);
    postImage.alt = `Image from ${postData.title}`;

    const postAuthor = document.createElement('p');
    postAuthor.textContent = `Author: ${postData.author}`;

    const postDate = document.createElement('p');
    postDate.textContent = `Created on: ${new Date(postData.created).toLocaleDateString()}`;

    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);

    if (postData.media) {
        postContainer.appendChild(postImage);
    }
    postContainer.appendChild(postAuthor);
    postContainer.appendChild(postDate);
}

