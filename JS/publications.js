const getPublications = async (req, res) => {
    let data = await fetch(
        "https://bda-labs-backend.onrender.com/publications"
    );
    data = await data.json();
    return data;
};
getPublications().then((data) => {
    console.log(data);
});
