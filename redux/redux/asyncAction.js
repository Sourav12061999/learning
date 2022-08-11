const redux= require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = require('redux-logger').createLogger();
const thunk=require("redux-thunk").default;
const axios = require("axios");
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";



const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users:action.payload,
        error:"",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error:action.payload,
        users:[]
      };
  }
};

const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest());
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res =>{
         const users = res.data.map(user => user.id);
         dispatch(fetchUsersSuccess(users));
     })
     .catch((error) => dispatch(fetchUsersFailure(error)))
    }
}
const store = createStore(reducer,applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());