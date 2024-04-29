/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/
function handleDogCreation(dog) {
  const ul = document.querySelector("#dogs");
  const li = document.createElement("li");
  li.textContent = `${dog.name} (${dog.age})`;
  ul.append(li);
}

function handleCatCreation(cat) {
  const ul = document.querySelector("#cats");
  const li = document.createElement("li");
  li.textContent = `${cat.name} (${cat.age})`;
  ul.append(li);
}
// Let's try making a GET request to display existing data on the page.
// let value = "cats";

function getResponse(value) {
  fetch(`http://localhost:3000/${value}`)
    .then((response) => response.json())
    .then((data) => {
      if (value === "dogs") {
        data.forEach(handleDogCreation);
      } else {
        data.forEach(handleCatCreation);
      }
    });
}
getResponse("cats");
getResponse("dogs");

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const dogName = event.target.name.value;
  const dogAge = event.target.age.value;
  console.log(dogName + dogAge);

  fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: dogName,
      age: dogAge,
      isGoodDog: true,
    }),
  })
    .then((response) => response.json())
    .then(handleDogCreation);
});

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function! -> done
// 2. Try writing your own POST request.

// 3. Try writing PATCH and DELETE requests!

//---------
// function fetchPetData(catsOrDogs) {
//   fetch(`http://localhost:3000/${catsOrDogs}`)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((pet) => {
//         createPet;
//         console.log(pet);
//       });
//     });

//   function createPet() {
//     const uldog = document.querySelector("#dogs");
//     const lidog = document.createElement("li");
//     lidog.textContent = `${dog.name} (${dog.age}))`;
//     uldog.append(lidog);

//     const ulcat = document.querySelector("#cats");
//     const licat = document.createElement("li");
//     licat.textContent = `${cat.name} (${cat.age}))`;
//     ulcat.append(licat);
//   }
// }

// fetchPetData("dogs");
// fetchPetData("cats");
