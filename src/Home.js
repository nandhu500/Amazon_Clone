import React from "react";
import "./Home.css";
import ProductDemo from "./ProductDemo";
export const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-ODllMzI5NmMt-w3000._CB418044882_.jpg"
          alt="conatiner"
        />

        <div className="home_row">
          <ProductDemo
            id="1"
            title="New produc"
            image="https://m.media-amazon.com/images/I/31jrlsL-j-L._AC_SY480_.jpg"
            price="30"
          />

          <ProductDemo
            id="2"
            title="ipad Air"
            image="https://images-na.ssl-images-amazon.com/images/I/71JWgeHx45L._AC_SY879_.jpg"
            price="774.33"
          />
          <ProductDemo
            id="3"
            title="New produc"
            image="https://m.media-amazon.com/images/I/41CRnvYqmqL.__AC_SY400_.jpg"
            price="30"
          />

          {/*2  */}
        </div>
        <div className="home_row">
          <ProductDemo
            id="4"
            title="New produc"
            image="https://m.media-amazon.com/images/I/41CRnvYqmqL.__AC_SY400_.jpg"
            price="30"
          />
          <ProductDemo
            id="5"
            title="New produc"
            image="https://m.media-amazon.com/images/I/41CRnvYqmqL.__AC_SY400_.jpg"
            price="30"
          />
          <ProductDemo
            id="6"
            title="New produc"
            image="https://m.media-amazon.com/images/I/41CRnvYqmqL.__AC_SY400_.jpg"
            price="30"
          />
          <ProductDemo
            id="7"
            title="New produc"
            image="https://m.media-amazon.com/images/I/41CRnvYqmqL.__AC_SY400_.jpg"
            price="30"
          />
        </div>
        <div className="home_row">
          <ProductDemo
            id="9"
            title="New produc"
            image="https://m.media-amazon.com/images/I/41CRnvYqmqL.__AC_SY400_.jpg"
            price="859.3"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
