import { createSlice } from "@reduxjs/toolkit";

// it would be set when page loads and no redux component has been updated 
const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //action is an argument that would be coming when action is dispatched
        //action.payload through this we can access new product passed through add to cart 
        addToCart: (State, action) => {
            return { products: [...State.products, {...action.payload, amount: 1}]}
        },
        clearCart: (State) => {
            return { products: []}
        },
        incrementProductAmount: (State, action) => {
            console.log('increment');
            return { products: State.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount + 1} : product)}
        },
        decrementProductAmount: (State, action) => {
            return { products: State.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount - 1} : product)}
        }
    }
})
// we will be using cartProduct name
//state is redux state ,cart is name of slice which we gave, products is anything inside the slice we want  to pass on
//map function always returns the array just like normal map functions of cpp/java.
export const cartProducts= State=>State.cart.products

//slice make it easier to combine reducers with actions all in one place
export const {  addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer