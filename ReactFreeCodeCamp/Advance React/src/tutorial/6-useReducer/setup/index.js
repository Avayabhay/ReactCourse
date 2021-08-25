import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {};
const defaultState = {
  people: data,
  isModal: true,
  modalContent: "Hello World",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ADDED");
    if (name) {
    } else {
    }
  };
  return (
    <>
      {state.isModal && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <div>
        {state.people.map((person) => {
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
