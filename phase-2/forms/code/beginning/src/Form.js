import { useState } from "react";

export default function Form() {
  //   const [name, setName] = useState("");
  //   const [movie, setMovie] = useState("");

  const [memberData, setMemberData] = useState({ name: "", movie: "" });

  const handleChange = (event) => {
    setMemberData({
      ...memberData,
      [event.target.name]: event.target.value,
    });

    if (memberData.movie.length >= 10) {
      alert("Only 10 characters are allowed ");
    }

    if (/\d/.test(event.target.value)) {
      alert("No numbers are allowed in the name!");
      return;
    }
  };

  return (
    <form>
      <label>
        <strong>Name </strong>
        <input name='name' value={memberData.name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        <strong>Movie </strong>
        <input name='movie' value={memberData.movie} onChange={handleChange} />
      </label>
      <br />
      <br />
      <em>Your lucky number is</em>{" "}
      <strong>{memberData.name.length * memberData.movie.length}</strong>!
      <br />
      <br />
      <input type='submit' value='Sign Up' />
      <h2>Members</h2>
      <sub>Fill out the form to add your first member!</sub>
    </form>
  );
}
