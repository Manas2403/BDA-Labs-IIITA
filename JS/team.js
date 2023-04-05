const getTeam = async () => {
    let res = await fetch("https://bda-labs-backend.onrender.com/team");
    let data = await res.json();
    return data;
};
const facultyContainer = document.getElementById("faculty");
const staffContainer = document.getElementById("staff");
const phdContainer = document.getElementById("phd");
const mtechContainer = document.getElementById("mtech");
const dualContainer = document.getElementById("dual");
const btechContainer = document.getElementById("btech");
const appendData = (data, container) => {
    container.innerHTML = `
    <div class="type" style="font-weight: bold; color: black">
                ${data[0].position}
            </div>
            <div class="faculty_grp">
            ${data.map((el, idx) => {
                return `
                <div class="post">
                    <div class="post__image">
                        <img src="./PIC/sa.jpg" alt="" width="200px" />
                    </div>
                    <div class="post__content">
                        <div class="post__content--title">${el.name}</div>
                        <div class="post__content--body">
                           ${el.description}
                        </div>
                        <div class="post__content--body">
                        Email: ${el.email}
                    </div>
                    <div class="post__content--body">
                        Research Interests: ${el.interests}
                    </div>
                    </div>
                </div>
                `;
            })}
            </div>`;
};
getTeam().then((data) => {
    const team = data.data;
    let faculty = team.filter((el, idx) => {
        return el.position === "Faculty";
    });
    let staff = team.filter((el, idx) => {
        return el.position === "Staff";
    });
    let phd = team.filter((el, idx) => {
        return el.position === "Ph.D";
    });
    let mtech = team.filter((el, idx) => {
        return el.position === "M.Tech";
    });
    let dual = team.filter((el, idx) => {
        return el.position === "Dual Degree";
    });
    let btech = team.filter((el, idx) => {
        return el.position === "B.Tech";
    });
    faculty && appendData(faculty, facultyContainer);
    staff && appendData(staff, staffContainer);
    phd && appendData(phd, phdContainer);
    mtech && appendData(mtech, mtechContainer);
    dual && appendData(dual, dualContainer);
    btech && appendData(btech, btechContainer);
});
