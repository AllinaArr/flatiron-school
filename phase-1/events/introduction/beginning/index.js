/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event
const today = document.querySelector("#today");
today.addEventListener("click", (event) => {
  console.log("Today was clicked!");
  console.log(event.target);
});

// ~ the "submit" event
document.querySelector("form").addEventListener("submit", (event) => {
  //Since the default behavior of "submit" is to redirect the page to a backend app, let's prevent that!
  event.preventDefault();
  //Take the date that was inputted by the user,
  //and set it as the text of #sometime

  const date = event.target["date"].value;
  const sometime = document.querySelector("#sometime");
  sometime.textContent = date;
});

// ~ challenges
// 1. [easy] Add another click event handler.
// 2. [medium] Add some non-click, non-submit event listener to the page.
document.querySelector("#tomorrow").addEventListener("mouseover", () => {
  const titleName = document.querySelector("#tomorrow");
  titleName.textContent = "Not tomorrow";
});
// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.

//document.querySelector("imageId")
//const newImageUrl = form.addTheUrl.value (try it)
const formForImg = document.querySelector("#imageId");

formForImg.addEventListener("submit", (e) => {
  e.preventDefault();

  const imagePlace = document.querySelector("#image");
  // const newImageURL= formForImg.addTheUrl.value;
  const newImageURL = e.target["addTheURL"].value;

  console.log(newImageURL);

  imagePlace.src = newImageURL;
});
// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.
