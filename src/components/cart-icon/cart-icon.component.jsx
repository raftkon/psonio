import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartIcon = () => {
  return (
    <>
      <CiShoppingCart className="text-4xl" />
      <span className="absolute right-[0.71rem] top-[0.55rem] text-sm">0</span>
    </>
  );
};

export default CartIcon;
