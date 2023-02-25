const apiUrl = 'https://api.storerestapi.com';
async function fetchPost() {
    try {
    const response = await fetch(`${apiUrl}/products`);

    if(!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts = response.json();
    // console.log('posts:' posts);
} catch(e) {
    console.log(e);
}
}

async function listsPosts(postContainerElementId){
    const postContainerElement = document.getElementById(postContainerElementId);

    if(!postContainerElement) {
        return;
    }

    fetchPosts()
        .then((posts) => {
            if (!posts) {
                postContainerElement.innerHTML = 'No posts fetched.';
                return;
            }

            for (const post of posts) {
                postContainerElement.appendChild(postElement(post));
            }
        })
        .catch(e => {
            console.log(e);
        });
}

function postElement(post) {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', `${apiUrl}/products/${posts.id}`);
    anchorElement.setAttribute('target', '_blank');
    anchorElement.innerText = post.title;

    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}