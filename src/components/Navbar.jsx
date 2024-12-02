import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Navbar.css";

const Navbar = ({size,setShow}) => {

  return (
    
      <nav>
        <div className="nav-box">
          <span className="my-shop">Shopping Cart</span>
       
        <div className="cart">
          <span>
            <i className="fas fa-cart-plus" onClick={()=>setShow(false)}></i>
          </span>
          <span>{size}</span>
        </div>
        </div>
      </nav>

  );
};

export default Navbar;
