import { useState } from "react";
export default function Form() {
  const [value, setValue] = useState({ name: "", email: "" });

  function handleSubmission(e) {
    e.preventDefault();
    console.log(value.email);
    alert(value.name, value.email);
  }
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setValue({ ...value, name: e.target.value })}
          type="text"
          name="name"
          value={value.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => setValue({ ...value, email: e.target.value })}
          name="email"
          value={value.email}
        />
        <button onClick={(e) => handleSubmission(e)}>submit</button>
      </form>
    </div>
  );
}
