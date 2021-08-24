import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ADDED");
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };
  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <div>
        {people.map((person) => {
          return (
            <div key={person.id}>
              <h4>{person.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
