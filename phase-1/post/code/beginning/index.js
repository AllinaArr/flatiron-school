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

function handleDogCreation(dog) {
  const ul = document.querySelector("#dogs");
  const li = document.createElement("li");
  li.textContent = `${dog.name} (${dog.age})`;
  ul.append(li);
  handleBtnAndDelete(li);
}

function handleCatCreation(cat) {
  const ul = document.querySelector("#cats");
  const li = document.createElement("li");
  li.textContent = `${cat.name} (${cat.age})`;
  ul.append(li);
  handleBtnAndDelete(li);
}

function handleBtnAndDelete(li) {
  let btn = document.createElement("button");
  btn.addEventListener("click", () => li.remove());
  btn.textContent = " x ";
  li.append(btn);
}

document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const petType = form.previousElementSibling.id;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const petName = event.target.name.value;
      const petAge = event.target.age.value;

      if (event.submitter.classList.contains("button")) {
        // Handle DELETE request
        fetch(`http://localhost:3000/${petType}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      } else {
        // Handle POST request
        fetch(`http://localhost:3000/${petType}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: petName,
            age: petAge,
            // isGoodDog: true,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (petType === "dogs") {
              handleDogCreation(data);
            } else {
              handleCatCreation(data);
            }
          });
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelectorAll("form");

//   form.forEach((petForm) => {
//     const petType = petForm.previousElementSibling.id;
//     console.log(petType);

//     petForm.addEventListener("submit", (event) => {
//       event.preventDefault();

//       const petName = event.target.name.value;
//       const petAge = event.target.age.value;
//       console.log(petName + petAge);

//       fetch(`http://localhost:3000/${petType}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           name: petName,
//           age: petAge,
//           // isGoodDog: true,
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (petType === "dogs") {
//             handleDogCreation(data);
//           } else {
//             handleCatCreation(data);
//           }
//         });
//     });
//   });
// });

// delete

// const form = document.querySelectorAll("form");

// // i am taking form here dogs or cats
// form.forEach((petForm) => {
//   const petType = petForm.previousElementSibling.id;
//   petForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const petName = event.target.name.value;
//     const petAge = event.target.age.value;
//     console.log(petName + petAge);
//     fetch(`http://localhost:3000/${petType}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         name: petName,
//         age: petAge,
//         //  isGoodDog: true,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });
//   });
// });

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.

//in class
// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const dogName = event.target.name.value;
//   const dogAge = event.target.age.value;
//   console.log(dogName + dogAge);

//   fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: { "Content-Type": "application/json", Accept: "application/json" },
//     body: JSON.stringify({
//       name: dogName,
//       age: dogAge,
//       isGoodDog: true,
//     }),
//   })
//     .then((response) => response.json())
//     .then(handleDogCreation);
// });

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function! -> done
// 2. Try writing your own POST request. -> done

// 3. Try writing PATCH and DELETE requests!
