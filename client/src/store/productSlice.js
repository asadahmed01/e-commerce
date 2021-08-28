import { createSelector, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./apiActionCreator";

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    lastFetched: null,
  },
  reducers: {
    productsRequested: (products, action) => {
      products.loading = true;
    },
    productsReceived: (products, action) => {
      products.list = action.payload;
      products.lastFetched = Date.now();
      products.loading = false;
    },

    productsRequestFailed: (products, action) => {
      products.loading = false;
    },

    productAdded: (products, action) => {
      const { title, price, description, url, numberInStock } = action.payload;
      products.list.push({
        title,
        price,
        url,
        numberInStock,
        description,
      });
    },
  },
});

export const {
  productsReceived,
  productsRequested,
  productsRequestFailed,
  productAdded,
} = productSlice.actions;
export default productSlice.reducer;

//Action creators
export const loadProducts = () => (dispatch, getState) => {
  const { lastFetched } = getState().entities.products;
  const diffInMinutes = moment().diff(moment(lastFetched), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url: "/products",
      onStart: productsRequested.type,
      onSuccess: productsReceived.type,
      onError: productsRequestFailed.type,
    })
  );
};

//post to the server

export const addProduct = (product) =>
  apiCallBegan({
    url: "/products/postproduct",
    method: "post",
    data: product,
    onSuccess: productAdded.type,
  });
//selector functions
export const getAllProducts = createSelector(
  (state) => state.entities.products,

  (products) => products.list
);
