/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import Card from "./Card";
import { useState } from "react";

export default function App() {
  //1. Make a state that manages the current card.
  const [isCard, setIsCard] = useState("Ace of Spades");
  //2. Make arrays of suits and ranks.
  const ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];
  const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
  //3. Make a function that randomly chooses from the arrays to change the card state.
  function randomize() {
    //a. Construct a new card
    // a.i. Get a random rank
    //Math.random() returns a number between  0 and 1
    //Math.floor() returns the integer just below a decimal [0.63 => 0] [5.43=>5]
    //Math.ceil() return the integer just above a decimal [0.63 => 1] [5.43 => 6]
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    // a.ii Get a random suit
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    // a.iii Make a string out of the above two random strings
    setIsCard(randomRank + " of " + randomSuit);
    //b. Change the state of the card, Call "setCard" with that new card value
  }
  //4. [Inside card] Add a click event listener to the button that triggers that functions.
  //5. [Inside card] We need to replace the static card text with the state value.

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Is This Your Card?</h1>
      <Card isCard={isCard} randomize={randomize} />
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}
