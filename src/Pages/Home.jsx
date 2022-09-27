import React from "react";
import Product from "../Components/Product";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
          className="home__image"
        />

        <div className="home__row">
          <Product
            title="PS5 Console- Horizon Forbidden West Bundle"
            price={549.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31URBlM8xoL._SY300_SX300_QL70_FMwebp_.jpg"
            rating={4}
          />
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={16.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Amazfit Bip 3 Smart Watch for Android iPhone, Health Fitness Tracker with 1.69 Large Display,14-Day Battery Life, 60+ Sports Modes, Blood Oxygen Heart Rate Monitor, 5 ATM Water-resistant (Black)"
            price={59}
            image="https://m.media-amazon.com/images/I/61D44N16zDL._AC_SY450_.jpg"
            rating={3}
          />
          <Product
            title="OnePlus 9 Pro Morning Mist, 5G Unlocked Android Smartphone U.S Version,12GB RAM+256GB Storage,120Hz Fluid Display,Hasselblad Quad Camera,65W Ultra Fast Charge,50W Wireless Charge,with Alexa Built-in"
            price={699}
            image="https://m.media-amazon.com/images/I/61smwbhzBML._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            title="Gaming Chair Office Chair High Back Computer Chair Leather Desk Chair Mesh Ergonomic Adjustable Swivel Task Chair with Headrest and Lumbar Support, 400lb Capacity,Red"
            price={115}
            image="https://m.media-amazon.com/images/I/61gmXNWdZML._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="SAMSUNG 65-Inch Class Crystal 4K UHD AU8000 Series HDR, 3 HDMI Ports, Motion Xcelerator, Tap View, PC on TV, Q Symphony, Smart TV with Alexa Built-In (UN65AU8000FXZA, 2021 Model)"
            price={628}
            image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}
