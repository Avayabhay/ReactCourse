export const reducer = (state, action) => {
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
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModal: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
    };
  }

  throw new Error("No Matching action Type");
};
