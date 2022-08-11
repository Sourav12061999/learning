import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice";
import icecreamReducer from "./features/icecream/icecreamSlice";
import { createLogger } from "redux-logger";
const logger = createLogger();
import userReducer from "./features/user/userSlice";
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:icecreamReducer,
        user:userReducer,
    },
    middleware:(getDefaultMiddleware) =>{
     return getDefaultMiddleware().concat(logger);
    },
});

export default store;