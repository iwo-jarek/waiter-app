import { API_URL } from "../config";

//selectors
export const allTables = (state) => state.tables;
export const tableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const EDIT_TABLE = createActionName("EDIT_TABLES");
// const ADD_TABLE = createActionName("ADD_TABLE");

// action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });
// export const addTable = (payload) => ({ type: ADD_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const updateTableForm = (tableUpdate) => {
  return (dispatch) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: tableUpdate.status,
        peopleAmount: tableUpdate.peopleAmount,
        maxPeopleAmount: tableUpdate.maxPeopleAmount,
        bill: tableUpdate.bill,
      }),
    };
    fetch(`${API_URL}/tables/${tableUpdate.id}`, options).then(() =>
      dispatch(editTable(tableUpdate))
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];

    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};
export default tablesReducer;
