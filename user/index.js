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
    const container = document.querySelector(".container");
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
                <div></div>
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
});
