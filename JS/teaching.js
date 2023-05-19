const getCourses = async () => {
    const res = await fetch("https://api.bdalabsiiita.in.net/courses");
    const data = await res.json();
    return data;
};
const courseContainer = document.querySelector(".course-container");
getCourses().then((data) => {
    data.data.forEach((course, i) => {
        const phd = course.phd.join(", ");
        const mtech = course.mtech.join(", ");
        courseContainer.innerHTML += `<div class="course_desc">
        <div class="course_title">${course.name}</div>
        <ul class="course_details">
          <li><b><span style="color:rgb(0,41,112);font-size:1.5rem">Instructor</span></b>: ${
              course.instructor
          }</li>
          <li><b><span style="color:rgb(0,41,112);font-size:1.5rem">PhD TAs</span></b>: ${phd}</li>
          <li><b><span style="color:rgb(0,41,112);font-size:1.5rem"s>M.tech TAs</span></b>: ${mtech}</li>
          <li><b><span style="color:rgb(0,41,112);font-size:1.5rem">Total Students</span></b>: ${
              course.students
          }</li>
          <h4 style="color:rgb(0,41,112);font-size:1.5rem;font-weight:bold">Projects</h4>
          ${course.publications.map(
              (pub) =>
                  `<a style="text-decoration:none" href=${pub.link}>${pub.name}</a>`
          )}   
        </ul>
      </div>`;
    });
});
