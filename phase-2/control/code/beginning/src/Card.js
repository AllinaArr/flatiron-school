export default function Card({ isCard, randomize }) {
  return (
    <h2
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center",
        border: "solid black",
        borderRadius: "10px",
      }}
    >
      {/* //5. [Inside card] We need to replace the static card text with the state value. */}
      {isCard}
      {/* //4. [Inside card] Add a click event listener to the button that triggers that functions. */}
      <button onClick={randomize}>Nah.</button>
    </h2>
  );
}
