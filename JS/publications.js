const getPublications = async (req, res) => {
    let data = await fetch(
        "https://bda-labs-backend.onrender.com/posts/Publications"
    );
    data = await data.json();
    return data;
};
const postContainer = document.querySelector(".post-container");
getPublications().then((data) => {
    data.data.forEach((post) => {
        postContainer.innerHTML += `
        <div class="post">
        <div class="post_title">${post.title}</div>
        <div class="post_authors">
        ${post.people.map((author) => {
            return `<a href=${author.link}>${author.name}</a>`;
        })}
        </div>
        <div class="post_desc">${post.desc}</div>
        <div class="external_links">Read More: <a href=${post.links.join(
            ", "
        )}>Link</a></div>
    </div>`;
    });
});
