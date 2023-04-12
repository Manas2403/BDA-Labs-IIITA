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
        <div class="post_title"><i class="fa-solid fa-book" style="color: #ffffff;"></i> ${
            post.title
        }</div>
        <div class="post_authors"><span style="font-weight:bold;color:rgb(1, 41, 112);font-size:1.1rem">Authors</span>:
        ${post.people.map((author) => {
            return `<a href=${author.link}>${author.name}</a>`;
        })}
        </div>
        <div class="post_desc">${post.desc}</div>
        <div class="external_links"><span style="font-weight:bold;color:rgb(1, 41, 112);font-size:1.1rem">Read More</span>:  <a style="text-decoration:none" target="_blank" href=${post.links.join(
            ", "
        )}><img src="./PIC/arrow.svg" style="width:15px;color:rgb(1,41,112)"/></a></div>
    </div>`;
    });
});
