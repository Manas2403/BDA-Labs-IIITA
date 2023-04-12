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
    <div class="type" style="font-weight: bold; color:rgb(1, 41, 112)">
                ${data[0].position}
            </div>
            <div class="faculty_grp">
            ${data.map((el, idx) => {
                return `
                <div style="opacity: 1; transform: none">
                <div class="ContactCard_contactCard__1yZii">
                    <div class="ContactCard_cardHeader__3Fu8s">
                        <div class="ContactCard_designation__1BXbK">
                            <b>${el.position}</b>
                        </div>
                        <div class="ContactCard_subDesignation__3CVix">
                            ${el.description}
                        </div>
                    </div>
                    <img
                        class="ContactCard_profileImage__BfUCA"
                        src="./PIC/sa.jpg"
                    />
                    <div class="ContactCard_cardContent__2ONbn">
                        <b style="margin: 0px; font-size: 1.4rem"
                            >${el.name}</b
                        >
                        <div class="ContactCard_footer__Ut8zl">
                            <table style="table-layout: auto; margin: auto">
                                <tbody>
                                    <tr>
                                        <td>
                                            <a
                                                href="mailto:anujkapoor@iitj.ac.in"
                                                class="ContactCard_email__M_S7C"
                                                ><svg
                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                                    focusable="false"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    style="
                                                        margin: 0px 0.5rem;
                                                    "
                                                >
                                                    <path
                                                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                                                    ></path></svg
                                                >${el.email}</a
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div
                                                class="ContactCard_phone__ky_j9"
                                            ></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
