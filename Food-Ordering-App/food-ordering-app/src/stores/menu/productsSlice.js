import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//asyncthunk for api calls which are asynchronous actions
const initialState = {
  products: {},
  error: null,
  status: "idle",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled"
        state.products=[...action.payload.data]
    })
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    })
  }
});

export const { getProducts } = productSlice.actions
//return what is currently stored
export default productSlice.reducer

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "http://localhost:8080/api/products-by-categories"
    );
    const data = await response.json();
    return data;
  }
);

export const selectAllProducts = (state) => state.products;
