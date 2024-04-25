/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
//An Application Programming Interface as a "bridge" between us and a data source
//API's let us (C)reate, (R)ead, (U)pdate, (D)elete data in such external sources
// document;
//AN API for communication between JS (this file) and HTML (index.html)

/*
<body>
    <p>Some text.</p>
    <div>
        <a href ="google.com">G</a>
    </div>
</body>
*/

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("h1"));
console.log(document.querySelector("p"));
console.log(document.querySelector("p#tomorrow")); //read by id
console.log(document.querySelector(".address")); // read by class
console.log(document.querySelectorAll("p")); // read multiple elements
console.log(document.querySelector("#today").textContent); // it gives us a text what is releated to id=today

const p = document.querySelector("#today"); //saving a node to a variable
console.log(p.textContent); //using a node variable
// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#tomorrow").textContent = "April 24,2024"; //update the value

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#forever").remove();

// ~ Create + Append a node
// -> createElement(), append()
const newH2 = document.createElement("h2");
// parent.append(child); //append the  element "child" as a child of the element "parent"
newH2.textContent = "Sometime in the future...";
document.body.append(newH2);

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining

const listOfBooks = ["The Shining", "Pride and Prejudice"];
displayList("Books", listOfBooks);

function displayList(books, listOfBooks) {
  const parentList = document.querySelector("div#dates");

  const createElementOfList = document.createElement("ul");
  createElementOfList.textContent = books;
  parentList.append(createElementOfList);

  listOfBooks.forEach((book) => {
    const createAList = document.createElement("li");
    createAList.textContent = book;
    document.body.append(createAList);
  });
}

// 2. Replace the <strong> element with a newly created one.
//Find a parent
const rootNodes = document.querySelector("address");
//Find what I would like to remove
const findStrong = document.querySelector("strong");
//Remove it
findStrong.remove();
//Create a new element
const createNewAtt = document.createElement("em");
//Assign the text
createNewAtt.textContent = "Sakib Rasul";
//Connect Parent Node where I would like to see the result
rootNodes.append(createNewAtt);
