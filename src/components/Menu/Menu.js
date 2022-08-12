import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <MenuIcon />
      <div className="menu__pages">
        <h2>All</h2>
        <h2>Deal's Store</h2>
        <h2>Gift Cards</h2>
        <h2>Gift Ideas</h2>
        <h2>Coupons</h2>
        <h2>Buy Again</h2>
        <h2>Health & Household</h2>
        <h2>Subscribe & save</h2>
        <h2>Beauty & Personal Care</h2>
      </div>
    </div>
  );
}

export default Menu;
