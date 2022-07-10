//selectors
export const getAllTables = (state => state.tables);
export const getTableById = ({ tables }, tableId) => tables.find(post  => post.id === tableId);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const EDIT_TABLES = createActionName("EDIT_TABLES");

// action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const editTables = (payload) => ({ type: EDIT_TABLES, payload });


export const fetchTables = () => {
  return (dispatch) => {
    fetch("http://localhost:3131/api/tables")
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const addTableRequest = () => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          
      })
    }
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
      case EDIT_TABLES:
     return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    default:
      return statePart;
  }
};
export default tablesReducer;
