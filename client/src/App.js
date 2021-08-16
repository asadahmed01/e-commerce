import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
