import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../../contexts/cart.context";
import { Container, Count } from "./cart-icon.styles";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <Container>
      <CiShoppingCart className="text-4xl" />
      <Count>{cartCount}</Count>
    </Container>
  );
};

export default CartIcon;
