const getProjects = async (req, res) => {
    let data = await fetch("http://localhost:8080/projects");
    data = await data.json();
    return data;
};
const projectContainer = document.querySelector(".project-container");
getProjects().then((data) => {
    data.data.forEach((post) => {
        projectContainer.innerHTML += `
        <div class="post">
        <div class="post_title"style="display:flex;gap:8px;align-items:center">${
            post.title
        }</div>
        <div class="post_authors"><span style="font-weight:bold;color:rgb(1, 41, 112);font-size:1.1rem">Supervisor</span>:
        ${post.supervisor}
        </div>
        <div class="post_desc">${post.description}</div>
        <div class="external_links"><span style="font-weight:bold;color:rgb(1, 41, 112);font-size:1.1rem">Read More</span>:  <a style="text-decoration:none" target="_blank" href=${
            post.link
        }><img src="./PIC/arrow.svg" style="width:15px;color:rgb(1,41,112)"/></a></div>
        ${
            post.fundingAgency
                ? `<div class="post_desc"><span style="font-weight:bold;color:rgb(1, 41, 112);font-size:1.1rem">Funding Agency</span>: ${post.fundingAgency}</div>`
                : ""
        }
        ${
            post.amount
                ? `<div class="post_desc"><span style="font-weight:bold;color:rgb(1, 41, 112);font-size:1.1rem">Amount</span>: Rs.${post.amount}</div>`
                : ""
        }
    </div>`;
    });
});
