import { authGuard } from "/fed2-js2-ca-gydalo/src/js/utilities/authGuard.js";
import { getPost } from "/fed2-js2-ca-gydalo/src/js/api/post/index.js";
import { updatePost } from "/fed2-js2-ca-gydalo/src/js/api/post/index.js";
import { load } from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";


authGuard();

function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

const form = document.querySelector("#editPost");

if (form) {
    const postId = getPostIdFromUrl();

    if (!postId) {
        console.error("Post ID is missing from the URL.");
        alert("Post ID is missing!");
    }

    async function loadPostData() {
        try {
            const post = await getPost(postId);

            form.title.value = post.title || '';
            form.body.value = post.body || '';
            form.mediaURL.value = post.media ? post.media.url : '';
            form.mediaALT.value = post.media ? post.media.alt : '';

        } catch (error) {
            console.error("Failed to fetch post data:", error);
            alert("Failed to load post data. Please try again later.");
        }
    }

    loadPostData();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());

        const updatedPost = {
            id: postId,
            title: formValues.title,
            body: formValues.body,
            media: {
                url: formValues.mediaURL,
                alt: formValues.mediaALT
            }
        };


        updatePost(updatedPost)
            .then(response => {
                console.log("Post updated successfully:", response);
                alert("Post updated successfully!");
                window.location.href = "/fed2-js2-ca-gydalo/index.html";
            })
            .catch(error => {
                console.error("Error updating post:", error);
                alert("Failed to update the post.");
            });
    });

} else {
    console.error("Edit post form not found");
}
