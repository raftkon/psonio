import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <CiShoppingCart className="text-4xl" />
      <span className="absolute right-[0.75rem] top-[0.65rem] text-xs">
        {cartCount}
      </span>
    </>
  );
};

export default CartIcon;
