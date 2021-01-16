import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
export const Header = () => {
  const [{ basket, user }] = useStateValue();

  const handleAuthen = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="header_search">
        <input className="search_input" type="text" />
        <SearchIcon className="search_icon" />
        {/* logo */}
      </div>
      <div className="header_nav">
        <div className="header_options" onClick={handleAuthen}>
          <span className="para1">
            {user ? "Hello " + user.email : "Hello Guest"}
          </span>
          <Link to={!user && "/login"} className="link">
            <span className="para2">{user ? "SignOut" : "SignIn"}</span>
          </Link>
        </div>
        <div className="header_options">
          <span className="para1">Return</span>
          <span className="para2">&Orders</span>
        </div>
        <div className="header_options">
          <span className="para1">Your</span>
          <span className="para2">Prime</span>
        </div>
        <div className="option_basket">
          <Link to="/checkout" className="option_basket">
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className="basket_count">{basket.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
