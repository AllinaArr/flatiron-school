/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.
// Make a GET request for dog facts.
fetch("https://dog-api.kinduff.com/api/facts?number=7")
  // Convert the JSON response into JS
  .then((response) => response.json())
  // Use the resulting JS!
  .then((data) => {
    const findDogLocation = document.querySelector("#dog");
    findDogLocation.textContent = data.facts[0];
    console.log(findDogLocation);

    //DOM and decision tree
    //is the elelemtn that I'm working with already is the DOM?
    //(Yes) Then just select and modify the element
    //(No) Then create, modify and append the element
  })
  //Log any error that occur
  .catch((error) => {
    console.log(error);
  });

// A synchronous request to https://anapioficeandfire.com/api/books.
fetch("https://anapioficeandfire.com/api/books")
  .then((response) => response.json())
  .then((booksData) => {
    booksData.forEach((book) => {
      const listItem = document.createElement("li");
      const locationOfList = document.querySelector("#got");
      locationOfList.append(listItem);
      listItem.textContent = `${book.name}`;
    });
  })
  .catch((error) => {
    console.log(error);
  });

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const pokemon = await response.json();
  console.log(pokemon);
  document.querySelector("#pokemon").textContent =
    pokemon.name[0].toUpperCase() +
    pokemon.name.slice(1) +
    " (" +
    pokemon.id +
    ")";
}
getPokemon("ditto");

// ~ Challenge: Make a GET request to an API of your choice!
async function getDictionary(word) {
  const response = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
  );
  const entry = await response.json();
  console.log(entry);
  const newElement = document.createElement("h2");

  document.body.append(newElement);
  newElement.textContent = `Dictionary word:   ${entry[0].word.toUpperCase()} 
  Meaning of  the word: ${entry[0].meanings[0].definitions[0].definition}`;
  // console.log(entry[0].meanings[0].definitions[0].definition);
}

getDictionary("hello");
