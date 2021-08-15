import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const addUser = (e) => {
    e.preventDefault();
    console.log(firstName, email);
  };
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <section>
        <form className="form" onSubmit={addUser}>
          <div className="form-control">
            <label htmlFor="firstName">First Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">E-mail : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Add User
          </button>
        </form>
      </section>
    </>
  );
};

export default ControlledInputs;
