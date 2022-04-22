console.log(data);

const dogList = document.querySelector(".dogs-list");
const header = document.querySelector(".header");
const mainSection = document.querySelector(".main__dog-section");
const addButton = document.querySelector(".dogs-list__button--add");

addButton.addEventListener("click", createForm);

header.addEventListener("click", (event) => createDogCard(event, data));

function createButtons() {
  data.forEach((el) => {
    let button = `<li class="dogs-list__button">${el.name}</li> `;
    dogList.insertAdjacentHTML("beforeend", button);
  });
}

createButtons();

function createDogCard(event, data) {
  data.forEach((el) => {
    if (el.name === event.target.innerText) {
      console.log(event.target.innerText);
      let card = `<section class="main__dog-section">
      <h2>${el.name}</h2>
      <img
        src=${el.image}
        alt=""
      />
      <div class="main__dog-section__desc">
        <h3>Bio</h3>
        <p>
          ${el.bio}
        </p>
      </div>
      <div class="main__dog-section__btn">
        <p><em>Is naughty?</em>${el.isGoodDog}</p>
        <button>Good dog!</button>
      </div>
    </section>
    
    `;
      mainSection.innerHTML = "";
      mainSection.insertAdjacentHTML("afterbegin", card);
    }
  });
}

function removeAllButAddButton() {
  while (dogList.childNodes.length > 2) {
    dogList.removeChild(dogList.lastChild);
  }
}

function formEventHandlerFunction() {
  form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let newDog = {
      id: Math.floor(Math.random() * 10),
      bio: event.target[2].value,
      image: event.target[1].value,
      isGoodDog: true,
      name: event.target[0].value,
    };

    data.unshift(newDog);
    removeAllButAddButton();
    createButtons();
  });
}

function createForm() {
  mainSection.innerHTML = "";

  let form = `<section class="main__dog-section">
  <h2>Add a new Dog</h2>
  <form class="form">

    <label for="name">Dog's name</label>
    <input type="text" id="name" name="name">

    <label for="image">Dog's picture</label>
    <input type="url" id="image" name="image">

    <label for="bio">Dog's bio</label>
    <textarea rows="5" id="bio" name="bio"></textarea>

    <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
  </form>
</section>`;

  mainSection.insertAdjacentHTML("afterbegin", form);

  formEventHandlerFunction();
}
