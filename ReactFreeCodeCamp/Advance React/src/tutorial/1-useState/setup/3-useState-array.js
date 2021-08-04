import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeName = (id) => {
    let newArray = people.filter((person) => person.id !== id);
    setPeople(newArray);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeName(id)}
            >
              Remove this Person
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear EveryThing
      </button>
    </>
  );
};

export default UseStateArray;
