const getWorkshops = async () => {
    let res = await fetch("https://bda-labs-backend.onrender.com/workshops");
    let data = await res.json();
    return data;
};
