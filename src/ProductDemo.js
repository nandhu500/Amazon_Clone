import React from "react";
import "./ProductDemo.css";
import { yellow } from "@material-ui/core/colors";
import { useStateValue } from "./StateProvider";
export const ProductDemo = ({ id, title, image, desc, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const clickHandle = () => {
    console.log("click accepted");
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: image,
        price: price,
      },
    });
  };
  const removPro = () => {
    console.log("click removed");
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: 1,
    });
  };
  //console.log(basket);

  return (
    <div>
      {/* title */}
      {/* image */}
      {/* deals */}
      {/* offer */}
      {/* price */}
      {/* button */}
      <div className="product_container" onClick={clickHandle}>
        <div className="product">
          <h3>{title}</h3>
          <img src={image} alt="" />
          <p>Epic Deals</p>
          <div className="pro_price">
            <small>$</small>
            <strong>{price}</strong>
          </div>
          <button style={{ backgroundColor: "yellow" }}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDemo;
