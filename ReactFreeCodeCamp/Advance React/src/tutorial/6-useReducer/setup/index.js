import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModal: true,
      modalContent: "ITEM ADDED",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModal: true,
      modalContent: "Please Enter the NAME",
    };
  }
  throw new Error("No Matching action Type");
};
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
