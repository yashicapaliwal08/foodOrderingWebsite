import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
//configureStore sets up well-configured Redux store with a single function call,including combining reducers,adding the thunk middleware
//it creates a store and accept reducer functions as argument and automatically sets up the redux devtools
//applyMiddleware allows  you to intercept every action sent to the reducer so you can make changes to the action or cancel the action
const store=configureStore({reducer:rootReducer},applyMiddleware(thunk));

export default store;