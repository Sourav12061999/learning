const { fetchUser } = require("./app/features/user/userSlice");
const store = require("./app/store");
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions;
const icecreamActions=require('./app/features/icecream/icecreamSlice').icecreamActions;
const userActions=require('./app/features/user/userSlice').fetchUser;
console.log(store.getState());
const unsubscribe= store.subscribe(()=> {
    console.log(store.getState());
});
/*
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(5))
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered(5));
store.dispatch(icecreamActions.restock(3));
*/
store.dispatch(fetchUser());

// unsubscribe();