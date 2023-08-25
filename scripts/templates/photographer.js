function photographerTemplate(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/photographersId/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.classList.add("photographer-portrait");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    const pCity = document.createElement("p");
    const pCountry = document.createElement("p");
    const pTagline = document.createElement("p");
    const pPrice = document.createElement("p");
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("flex", "gap-1");
    pPrice.textContent = `${price}€/jour`;
    pTagline.textContent = tagline;
    h2.textContent = name;
    pCity.textContent = `${city},`;
    pCountry.textContent = country;
    locationDiv.appendChild(pCity);
    locationDiv.appendChild(pCountry);
    article.appendChild(img);
    article.appendChild(h2);
    // article.appendChild(pCity);
    // article.appendChild(pCountry);
    article.appendChild(locationDiv);
    article.appendChild(pTagline);
    article.appendChild(pPrice);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
