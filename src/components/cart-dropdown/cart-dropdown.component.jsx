import React from "react";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div
      className="absolute right-4 top-12 rounded border border-black flex flex-col 
      p-5 w-60 h-80 z-10 bg-white"
    >
      {/* Cart Items */}
      <div className="h-60 flex flex-col overflow-scroll"></div>
      <Button className="mt-auto">Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
