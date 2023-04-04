const getTeam = async (req, res) => {
    let res = await fetch("https://bda-labs-backend.onrender.com/team");
    let data = await res.json();
    return data;
};
