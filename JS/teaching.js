const getCourses = async () => {
    const res = await fetch("https://bda-labs-backend.onrender.com/courses");
    const data = await res.json();
    return data;
};
const courseContainer = document.querySelector(".course-container");
getCourses().then((data) => {
    data.data.forEach((course, i) => {
        const phd = course.phd.join(", ");
        const mtech = course.mtech.join(", ");
        courseContainer.innerHTML += `<li>
        <h2>Course ${i + 1}</h2>
        <ul>
          <li>Instructor: ${course.instructor}</li>
          <li>PhD TAs:${phd}</li>
          <li>M.tech TAs: ${mtech}</li>
          <li>Total Students: ${course.students}</li>
          <h4>Publications</h4>
          <ul>
          ${course.publications.map((pub) => {
              return `<li><a href=${pub.link}>${pub.name}</a></li>`;
          })}
          </ul>
        </ul>
      </li>`;
    });
});
