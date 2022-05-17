import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Navbar: React.FC = () => {
  const { amount } = useSelector((store: RootState) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Cart</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
