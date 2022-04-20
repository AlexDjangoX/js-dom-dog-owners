console.log(data);

let mainSection = document.querySelector(".main__dog-section");

function eventHandlerFunction() {
  mainSection.innerHTML = "";
  let eventId = event.target.attributes.id.value;
  data.forEach((card) => {
    if (card.id == eventId) {
      createCard(card);
    }
  });
}

let addNewDog = document.querySelector(".dogs-list__button--add");
addNewDog.addEventListener("click", (event_) => {
  createForm();
});

let bonker = document.getElementById("1");
bonker.addEventListener("click", (event) => {
  eventHandlerFunction();
});
let nugget = document.getElementById("2");
nugget.addEventListener("click", (event) => {
  eventHandlerFunction();
});
let skittle = document.getElementById("3");
skittle.addEventListener("click", (event) => {
  eventHandlerFunction();
});
let butter = document.getElementById("4");
butter.addEventListener("click", (event) => {
  eventHandlerFunction();
});

let lucipher = document.getElementById("5");
lucipher.addEventListener("click", (event) => {
  eventHandlerFunction();
});

let snoop = document.getElementById("6");
snoop.addEventListener("click", (event) => {
  eventHandlerFunction();
});

let puddle = document.getElementById("7");
puddle.addEventListener("click", (event) => {
  eventHandlerFunction();
});

// build card

let mainDogSection = document.querySelector(".main__dog-section");

function createCard(data) {
  let dogCardHeading = document.createElement("h2");
  dogCardHeading.innerText = data.name;
  mainDogSection.append(dogCardHeading);
  let dogCardImage = document.createElement("img");
  dogCardImage.setAttribute(`src`, `${data.image}`);
  mainDogSection.append(dogCardImage);
  let dogCardDiv = document.createElement("div");
  dogCardDiv.setAttribute("class", "main__dog-section__desc");
  mainDogSection.append(dogCardDiv);
  let dogCardBioHeading = document.createElement("h3");
  dogCardDiv.appendChild(dogCardBioHeading);
  let dogCardBioParagraph = document.createElement("p");
  dogCardBioParagraph.innerText = data.bio;
  dogCardBioHeading.append(dogCardBioParagraph);

  let dogCardButtonDiv = document.createElement("div");
  dogCardButtonDiv.setAttribute("class", "main__dog-section__btn");
  mainDogSection.append(dogCardButtonDiv);
  let dogCardButtonDivParagraph = document.createElement("p");
  dogCardButtonDiv.append(dogCardButtonDivParagraph);
  let paragraphEmphasis = document.createElement("em");
  dogCardButtonDivParagraph.innerText = "Is naught?";
  paragraphEmphasis.innerText = " yes !";
  dogCardButtonDivParagraph.append(paragraphEmphasis);
  let dogCardButtonDivButton = document.createElement("button");
  dogCardButtonDivButton.innerText = "Good dog !";
  dogCardButtonDiv.append(dogCardButtonDivButton);
}

function createForm() {
  mainSection.innerHTML = "";
  let formSection = document.createElement("section");
  formSection.setAttribute("class", "main__dog-section");

  mainSection.append(formSection);

  let formHeading = document.createElement("h2");
  formHeading.innerText = "Add a new Dog";
  formSection.append(formHeading);
  let form = document.createElement("form");
  form.setAttribute("class", "form");
  formSection.append(form);

  let nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  form.appendChild(nameLabel);

  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");
  form.appendChild(nameInput);

  let imageLabel = document.createElement("label");
  imageLabel.setAttribute("for", "image");
  form.appendChild(imageLabel);

  let imageInput = document.createElement("input");
  imageInput.setAttribute("type", "url");
  imageInput.setAttribute("id", "image");
  imageInput.setAttribute("name", "image");
  form.appendChild(imageInput);

  let bioLabel = document.createElement("label");
  bioLabel.setAttribute("for", "bio");
  form.appendChild(bioLabel);

  let bioTextArea = document.createElement("textarea");
  bioTextArea.setAttribute("rows", "5");
  bioTextArea.setAttribute("id", "bio");
  bioTextArea.setAttribute("name", "bio");
  form.appendChild(bioTextArea);

  let formInput = document.createElement();
  formInput.setAttribute("type", "submit");
  formInput.setAttribute("id", "submit");
  formInput.setAttribute("name", "submit");
  formInput.setAttribute("value", "Let us add a dog");
  formInput.setAttribute("class", "form_button");
  form.appendChild(formInput);
}

createForm();
