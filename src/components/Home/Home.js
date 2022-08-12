import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/611w8CPT7GL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="4233289"
            title="MSI Optix MAG301CR2 FHD Non-Glare 1ms 2560 x 1080 Ultra Wide 200Hz"
            price={429.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81YdE2+ZrFL._AC_SL1500_.jpg"
          />
          <Product
            id="8954598"
            title="ASUS Chromebook CX9, 14 inches Touchscreen Full HD NanoEdge Display"
            price={1149.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81uikZhSaBL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="8934387"
            title="2.2 LB Automatic Bread Machine - 15-in-1 Stainless Steel Bread Maker with Nut Dispenser and Nonstick Pan"
            price={129.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71naYMXbVVL._AC_SX679_.jpg"
          />
          <Product
            id="2455430"
            title="Fitbit Sense Advanced Smartwatch with Tools for Heart Health (ECG), Stress Management & Skin Temperature Trends"
            price={259.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/51WhoCW0H9L._AC_SX679_.jpg"
          />
          <Product
            id="1232289"
            title="Samsung Galaxy A10e 32GB Unlocked Phone - Black"
            price={179.94}
            rating={4}
            image="https://m.media-amazon.com/images/I/71eQUNgqioL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Massage Gun Handheld Deep Tissue Percussion Massager Device for Pain Relief"
            price={119.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61wYKYV7lkS._AC_SL1397_.jpg"
          />
          <Product
            id="80229342"
            title="Bluetooth Speaker, W-KING 80W Super Punchy Bass, Huge 105dB Sound Portable Wireless Speakers"
            price={133.44}
            rating={5}
            image="https://m.media-amazon.com/images/I/71crecYGetL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
