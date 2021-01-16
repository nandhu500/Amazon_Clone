import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import { Button } from "@material-ui/core";
const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);

  const removeProduct = (product) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: product.id,
    });
    console.log("removeee" + product);
  };

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png"
          alt=""
        />
        <div className="checkout_title">
          <h3>Hello {user?.email}</h3>
          <h2>Shopping basket</h2>
          {basket?.length === 0 && (
            <p style={{ marginTop: "15px" }}>Basket is empty</p>
          )}
          {basket.map((bas) => {
            return (
              <div className="image_parent">
                <div className="image_contain">
                  <img src={bas.img} alt="" />
                  <p>{bas.title}</p>
                  <p>${bas.price}</p>
                  <button
                    onClick={() => {
                      removeProduct(bas);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
