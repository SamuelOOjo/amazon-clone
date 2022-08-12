import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Payment from "./components/Payment/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JkEr9AkawONvp5ejPAxS3QSK1pl4al50G0lgOvHRw9avrloEbgeoz66ENIRz8kJLOnfE2Dxoyr82v1zNgckMkop001hsJ2rEW"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        //User just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Menu />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Menu />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Menu />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Menu />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
