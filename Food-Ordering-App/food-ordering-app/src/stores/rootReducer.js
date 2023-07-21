import { combineReducers } from "redux"; //to combine all the reducers
import cartReducer from "./cart/cartSlice";
import productReducer from "./menu/productsSlice";
import addressReducer from "./userinfo/addressSlice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        address: addressReducer
    }
);

export default rootReducer;