function createMenu() {
    const main = document.querySelector("#main");
  
    if (!document.getElementById("menuFeed")) {
      const menuContainer = document.createElement("div");
      menuContainer.id = "menuFeed";
  
      main.appendChild(menuContainer);
  
      const breakfast = document.createElement("h2");
      breakfast.textContent = "Breakfast";
      menuContainer.appendChild(breakfast);
  
      const breakfastContainer = document.createElement("div");
      breakfastContainer.classList.add("menuSection");
      menuContainer.appendChild(breakfastContainer);
  
      breakfastContainer.appendChild(
        createMenuItem("breakfast1", "English Breakfast")
      );
      breakfastContainer.appendChild(
        createMenuItem("breakfast2", "Some Greens")
      );
  
      const mainCourses = document.createElement("h2");
      mainCourses.textContent = "Main Courses";
      menuContainer.appendChild(mainCourses);
  
      const mainCoursesContainer = document.createElement("div");
      mainCoursesContainer.classList.add("menuSection");
      menuContainer.appendChild(mainCoursesContainer);
  
      mainCoursesContainer.appendChild(
        createMenuItem("main1", "Beff Wellington")
      );
      mainCoursesContainer.appendChild(
        createMenuItem("main2", "Adobong Manok")
      );
  

      const desserts = document.createElement("h2");
      desserts.textContent = "Desserts";
      menuContainer.appendChild(desserts);
  
      const dessertsContainer = document.createElement("div");
      dessertsContainer.classList.add("menuSection");
      menuContainer.appendChild(dessertsContainer);
  
      dessertsContainer.appendChild(createMenuItem("cake", "CAKE"));
      dessertsContainer.appendChild(
        createMenuItem("halo", "Halo Halo")
      );
  
      return menuContainer;
    }
  
    function createMenuItem(title, description) {
      const menuItem = document.createElement("div");
  
      const menuItemImage = document.createElement("img");
      menuItemImage.src = `./img/${title.toLowerCase()}.jpg`;
      menuItemImage.alt = `${title}`;
  
      const menuItemDescription = document.createElement("p");
      menuItemDescription.textContent = description;
  
      menuItem.appendChild(menuItemImage);
      menuItem.appendChild(menuItemDescription);
  
      return menuItem;
    }
  }
  
  function menuPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export { menuPage };