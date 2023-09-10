//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographer(id){
    const response = await fetch("./data/photographers.json")
    const data = await response.json();
    let photographer = {};
    console.log(data.photographers);
    for (let i = 0; i < data.photographers.length; i++){
        const photograph = data.photographers[i];
        const photographId = photograph.id;
        console.log(photographId);
        if (photographId === id) {
            console.log(photographId, "success");
            photographer = photograph;
        }
    }
    return photographer;
}

async function displayData(photographer) {
    const photographerSection = document.querySelector(".photograph-header");

    photographer.map((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographerSection.appendChild(userCardDOM);
    });
}


async function init() {
    // Récupère les datas des photographes
    let params = new URL(document.location).searchParams;
    let id = parseInt(params.get("id")); 
    // let photographId = parseInt(params.get("age"));
    console.log(id);

    const  result  = await getPhotographer(id);
    console.log(result);
}
init();