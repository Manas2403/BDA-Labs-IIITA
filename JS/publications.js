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
        <div class="post_title"style="display:flex;gap:8px;align-items:center"><div style="width:18px"><svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg></div> ${
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
