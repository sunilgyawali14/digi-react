import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsRegistered(true);
  };

  return (
    <>
      <div>
        <h1>Registration Form</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <br />
        <br />

        <button type="submit">Register</button>
      </form>

      {/* Ternary Operator */}
      {isRegistered ? (
        <p>{form.name}, you are registered successfully...</p>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Form;
