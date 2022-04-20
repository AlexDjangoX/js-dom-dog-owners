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
