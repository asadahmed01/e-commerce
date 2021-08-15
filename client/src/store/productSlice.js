import { createSelector, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./apiActionCreator";

const cartSlice = createSlice({
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
    addToCart: (products, action) => {
      const dish = products.list.find(
        (item) => item._id === action.payload._id
      );

      if (dish) {
        return products.list.map((item) =>
          item._id === action.payload._id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        products.list.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    incrementItem: (products, action) => {
      return products.list.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },

    decrementItem: (products, action) => {
      return (products = products.list.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    },

    removeItem: (products, action) => {
      return products.list.filter((item) => item._id !== action.payload);
    },

    clearCart: () => [],
  },
});

export const {
  addToCart,
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
  productsReceived,
  productsRequested,
  productsRequestFailed,
  productAdded,
} = cartSlice.actions;
export default cartSlice.reducer;

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
