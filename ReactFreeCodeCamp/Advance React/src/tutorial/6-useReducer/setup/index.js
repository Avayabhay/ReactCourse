import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModal: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ADDED");
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <div>
        {state.people.map((person) => {
          return (
            <div key={person.id} className="item">
              <h4>{person.name}</h4>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_ITEM", payload: person.id });
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
