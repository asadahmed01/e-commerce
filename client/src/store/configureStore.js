import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

// export default configureStore({
//   reducer: {
//     products: productsReducer,
//   },
//   middleware: [
//     ...getDefaultMiddleware(),

//   ]
// });

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
  });
}
