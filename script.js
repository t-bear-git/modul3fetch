// Declared Variables for HTML elements
const animalImage = document.querySelector(".image-output");
const showAnimalBtn = document.querySelector(".show-animal");

// Event listener for button that runs selectFunction
showAnimalBtn.addEventListener("click", selectFunction);

// Function for fetching random cat image
function randomCatImage() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => {
      animalImage.innerHTML = `<img src="${data.file}" alt="Img not found">`;
    });
}
// Function for fetching random dog image
function randomDogImage() {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((data) => {
      animalImage.innerHTML = `<img src="${data.url}" alt="Img not found">`;
    });
}
// Function for fetching random fox image
function randomFoxImage() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((data) => {
      animalImage.innerHTML = `<img src="${data.image}" alt="Img not found">`;
    });
}

// Function to choose from dropdown what fetch function to run
function selectFunction() {
  let selectedAnimal = document.querySelector(".select-animal").value;
  if (selectedAnimal == "cat") {
    randomCatImage();
  } else if (selectedAnimal == "dog") {
    randomDogImage();
  } else if (selectedAnimal == "fox") {
    randomFoxImage();
  }
}