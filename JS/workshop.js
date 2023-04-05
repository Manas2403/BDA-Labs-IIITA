const getWorkshops = async () => {
    let res = await fetch("https://bda-labs-backend.onrender.com/workshops");
    let data = await res.json();
    return data;
};
const workshopContainer = document.querySelector(".workshop-container");
getWorkshops().then((data) => {
    data.data.forEach((workshop, i) => {
        const date = workshop.startDate;
        const d = Date.parse(date);
        const day = new Date(d).getDate();
        const month = new Date(d).getMonth();
        const year = new Date(d).getFullYear();
        workshopContainer.innerHTML += `<div class="workshop">
        <div class="workshop_desc">
            <div class="workshop_title">
                ${workshop.title}
            </div>
            <div class="workshop_description">
               ${workshop.desc}
            </div>
            <div class="start_date">
                Start Date: <b>${day + "/" + month + "/" + year}</b>
            </div>
            <div class="register">
                To attend register here:
                <a
                    href=${workshop.registerationLink}
                    style="color: blue"
                    target="_blank"
                    >Link</a
                >
            </div>
            <div class="payment">
                Payment Link:
                <a
                    href=${workshop.paymentLink}
                    style="color: blue"
                    target="_blank"
                    >Link</a
                >
            </div>
            <div class="external_links">
                You can read more here:
                <a
                    href=${workshop.externalLinks}
                    style="color: blue"
                    target="_blank"
                    >Link</a
                >
            </div>
        </div>
        <div class="workshop_img">
            <img
                src="./PIC/workshop.jpg"
                alt=""
                width="400px"
                height="200px"
            />
        </div>
    </div>`;
    });
});
