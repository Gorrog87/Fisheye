const photographerTemplate = function (data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/photographersId/${portrait}`;

  const photographPage = new URL(document.location + "/photographer.html")
  photographPage.searchParams.set("id", id);
  // console.log(photographPage);



  const getUserCardDOM = function () {
    const article = document.createElement("article");
    article.classList.add("text-center");
    const img = document.createElement("img");
    img.classList.add("photographer-portrait");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const pCity = document.createElement("p");
    pCity.textContent = `${city},`;
    const pCountry = document.createElement("p");
    pCountry.textContent = country;
    const pTagline = document.createElement("p");
    pTagline.textContent = tagline;
    const pPrice = document.createElement("p");
    pPrice.textContent = `${price}€/jour`;
    pPrice.classList.add("thin");
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("flex", "gap-1", "red");
    const link = document.createElement("a");
    link.appendChild(img);
    link.appendChild(h2);
    link.setAttribute("href", photographPage);
    locationDiv.appendChild(pCity);
    locationDiv.appendChild(pCountry);
    article.appendChild(link);
    article.appendChild(locationDiv);
    article.appendChild(pTagline);
    article.appendChild(pPrice);
    // l'idee etait de passer les infos dans le localStorage pour les faire basculer vers la page d'un photographe pour respecter le DRY mais ça marche pas....... :(
    // const photographInfos= localStorage.setItem("article", article);
    // console.log(photographInfos);
    return article;
  }
  return { name, picture, getUserCardDOM };
}


 function photographerPageTemplage(data){
    const { name, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/photographersId/${portrait}`;

    function getPhotographerInfo(){
      const photographerSection = document.querySelector(".photograph-header");
        const article = document.createElement("article");
        const img = document.createElement("img");
        img.setAttribute("src", picture );
        article.appendChild(img);
        photographerSection.appendChild(article);
        return article
    }
    return { name, picture, getPhotographerInfo };
}

 function photographerPage(){
    window.location.href=`./photographer.html`;
}
