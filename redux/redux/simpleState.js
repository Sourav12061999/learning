const redux=require('redux');
const logger = require('redux-logger').createLogger();
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const combinationReducer = redux.combineReducers;
const BUY_CAKE="BUY_CAKE";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const BUY_ICE ="BUY_ICE";
const ICE_RESTOCKED = "ICE_RESTOCKED";
function buy(quantity,type){
  return {
    type,
    quantity,
  }
}

function restock(quantity=1,type){
  return {
    type,
    quantity,
  }
}

const cakeState={
  noOfCakes: 20,
}
const iceState={
  noOfIce: 20,
}

const cakeReducer = (state=cakeState, action) =>{
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes-action.quantity,
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes+action.quantity,
      }
    default:
    return state;
  }
}
const iceReducer = (state=iceState, action) =>{
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        noOfIce: state.noOfIce-action.quantity,
      }
    case ICE_RESTOCKED:
      return {
        ...state,
        noOfIce: state.noOfIce+action.quantity,
      }
    default:
    return state;
  }
}

const rootReducer= combinationReducer({
  cakeReducer,
  iceReducer,
})

const store = createStore(rootReducer,applyMiddleware(logger));
console.log( store.getState());
store.dispatch(buy(2,BUY_CAKE));
store.dispatch(buy(3,BUY_CAKE));
store.dispatch(buy(5,BUY_CAKE));
store.dispatch(buy(4,BUY_ICE));
