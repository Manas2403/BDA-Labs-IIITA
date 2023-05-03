const urlParams = new URLSearchParams(location.search);
const username = urlParams.get("q");
const getUser = async (req, res) => {
    let data = await fetch(
        `https://bda-labs-backend.onrender.com/user/${username}`,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );
    data = await data.json();
    return data;
};
getUser().then((data) => {
    const user = data.data.user;
    const container = document.querySelector(".home_container");

    container.innerHTML = `
    <div
    style="
        font-size: 3rem;
        color: rgb(1, 41, 112);
        text-align: center;
        font-weight: bold;
    "
>
    ${user.name}
</div>
    <div class="about_section">
                <img src=${data.data.url} alt="Sonali" width="250px" />
                <div style="font-size:1.2rem">
                    ${user.about}
                </div>
            </div>
            <div class="research_section">
                <div
                    style="
                        font-size: 2rem;
                        color: rgb(1, 41, 112);
                        text-align: left;
                        font-weight: bold;
                        margin-bottom: 1rem;
                    "
                >
                    Research Interests
                </div>
                <div>
                    ${user.researchInterests}
                </div>
            </div>
            <div class="research_section">
            <div style="display:flex;gap:1rem;flex-wrap:wrap">
                <div
                    style="
                        font-size: 2rem;
                        color: rgb(1, 41, 112);
                        text-align: left;
                        font-weight: bold;
                        margin-bottom: 1rem;
                    "
                >
                    Recent Publicatons
                </div>
                <button style="color:white;background-color:rgb(1,41,112);border-radius:8px;text-align:center;"data-toggle="modal" data-target="#exampleModal">Add</button>
                </div>
                <div class=".publications-container">
                ${user.publications.map((post) => {
                    return `<div class="post">
                    <div class="post_title"style="display:flex;gap:8px;align-items:center"><div style="width:18px"><svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg></div> ${post.title}<div class="deleteBtn" style="width:18px;cursor:pointer;align-self:flex-end"><svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></div></div>
                    <div class="post_desc">${post.description}</div>
                    <div class="external_links"><span style="font-weight:bold;color:rgb(1, 41, 112);font-size:1.1rem">Read More</span>:  <a style="text-decoration:none" target="_blank" href=${post.link}><img src="../PIC/arrow.svg" style="width:15px;color:rgb(1,41,112)"/></a></div>
                </div>`;
                })}
                </div>
            </div>
            <div class="research_section">
                <div
                    style="
                        font-size: 2rem;
                        color: rgb(1, 41, 112);
                        text-align: left;
                        font-weight: bold;
                        margin-bottom: 1rem;
                    "
                >
                    Contact Information
                </div>
                <div>
                <ul>
                 <li style="margin-bottom:4px">Email: ${user.username}</li>
                 <li>Mobile: ${user.mobile}</li>
                 <li>Address: ${user.address}</li>
                </ul>
                </div>
            </div>`;
    if (
        !localStorage.getItem("token") ||
        username !== parseJwt(localStorage.getItem("token")).user.username
    ) {
        document.querySelector(".deleteBtn").style.display = "none";
    }
});

function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );
    console.log(JSON.parse(jsonPayload));
    return JSON.parse(jsonPayload);
}
parseJwt(localStorage.getItem("token"));
