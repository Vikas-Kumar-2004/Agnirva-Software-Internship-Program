const API_URL = "http://localhost:5000/posts";

document.getElementById('postForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        document.getElementById('postForm').reset();
        fetchPosts();
    }
});

async function fetchPosts() {
    const res = await fetch(API_URL);
    const posts = await res.json();
    const container = document.getElementById("posts");
    container.innerHTML = "";
    posts.forEach(post => {
        const el = document.createElement("div");
        el.className = "post";
        el.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="deletePost(${post.id})">Delete</button>
        `;
        container.appendChild(el);
    });
}

async function deletePost(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchPosts();
}

// Initial load
fetchPosts();
