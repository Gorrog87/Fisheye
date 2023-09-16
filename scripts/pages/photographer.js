//Mettre le code JavaScript lié à la page photographer.html
// import {photgrapherFactory} from "../templates/photographerFactory";
// photgrapherFactory()


async function getPhotographer(id){
    const response = await fetch("./data/photographers.json")
    const data = await response.json();
    let photographer = {};
    // console.log(data.photographers);
    for (let i = 0; i < data.photographers.length; i++){
        const photograph = data.photographers[i];
        const photographId = photograph.id;
        // console.log(photographId);
        if (photographId === id) {
            // console.log(photographId, "success");
            photographer = photograph;
        }
    }
    return photographer;
}

const displayData = async function (photographerParameter) {

    const photographersSection = document.querySelector(".photograph-header");

    
        const photographerModel = photographerTemplate(photographerParameter);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);

        
}


async function init() {
    // const photographPageTemplate = displayData(photograph);
    let params = new URL(document.location).searchParams;
    let id = parseInt(params.get("id")); 
    // console.log(id);

    const  photographerResult  = await getPhotographer(id);
    console.log(photographerResult);
    // console.log(photographPageTemplate);
    // return photographPageTemplate
    displayData(photographerResult);
}
init();