function createHome() {
  const main = document.querySelector("#main");

  if (!document.getElementById("homeFeed")) {
    const homeFeed = document.createElement("h1");
    homeFeed.id = "homeFeed";
    main.appendChild(homeFeed);
    homeFeed.appendChild(
      addText(
        "Welcome to Our Exquisite Restaurant"
      )
    );

    const restaurantPicture = document.createElement("img");
    restaurantPicture.src = "./img/front.jpg";
    restaurantPicture.alt = "home page image";
    homeFeed.appendChild(restaurantPicture);

    homeFeed.appendChild(addText("Indulge in a culinary journey like no other."));
    homeFeed.appendChild(
      addText(" Experience the finest ingredients, masterful techniques, and an ambiance that's simply enchanting.")
    );
    homeFeed.appendChild(
      addText("MAKE YOUR RESERVATION NOW!!!!!")
    );

    return homeFeed;
  }
}

function addText(text) {
  const textToAdd = document.createElement("p");
  textToAdd.textContent = text;
  return textToAdd;
}

function homePage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}
export { homePage };