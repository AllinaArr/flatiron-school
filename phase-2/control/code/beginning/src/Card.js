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
      {isCard}
      <button onClick={randomize}>Nah.</button>
    </h2>
  );
}
