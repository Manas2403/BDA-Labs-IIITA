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
        <h2>${course.name}</h2>
        <ul class="course_details">
          <li><b>Instructor</b>: ${course.instructor}</li>
          <li><b>PhD TAs</b>: ${phd}</li>
          <li><b>M.tech TAs</b>: ${mtech}</li>
          <li><b>Total Students</b>: ${course.students}</li>
          <h4>Publications</h4>
          ${course.publications.map((pub) => {
              return `<a href=${pub.link}>${pub.name}</a>`;
          })}   
        </ul>
      </li>`;
    });
});
