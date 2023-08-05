function createContact() {
  const main = document.querySelector("#main");

  if (!document.getElementById("contactFeed")) {
    const contactContainer = document.createElement("div");
    contactContainer.id = "contactFeed";

    const contactInfoContainer = document.createElement("div");
    contactInfoContainer.classList.add("contactInfoContainer");
    contactContainer.appendChild(contactInfoContainer);

    contactInfoContainer.appendChild(
      createContactSection(
        "OWNER MAN",
        "DOWNDOWN, DOWNTOWN, USA",
        "+123456789"
      )
    );
    contactInfoContainer.appendChild(
      createContactSection(
        "Monday-Thursday: 6am - 11pm",
        "Friday-Saturday: 7am - 11pm",
        "Sunday: 9am - 10am"
      )
    );

    const contactMap = document.createElement("img");
    contactMap.src = "./img/map.png";
    contactMap.alt = "map";

    contactContainer.appendChild(contactMap);

    return contactContainer;
  }
}

function createContactSection() {
  const contactSection = document.createElement("div");

  for (let i = 0; i < 3; i++) {
    const contactSectionRow = document.createElement("p");
    contactSectionRow.textContent = arguments[i];
    contactSection.appendChild(contactSectionRow);
  }
  return contactSection;
}

function contactPage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export { contactPage };