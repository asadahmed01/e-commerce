import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/Admin";
import Payment from "./components/Payment";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />

          <Route path="/checkout" component={Checkout} />
          <Route path="/payment" component={Payment} />
          <ProtectedRoute exact path="/admin" component={Admin} />
          <ProtectedRoute exact path="/dashboard/:id" component={Dashboard} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
