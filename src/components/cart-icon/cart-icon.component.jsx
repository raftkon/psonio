import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/cart/cart.selector";
import { Container, Count } from "./cart-icon.styles";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <Container>
      <CiShoppingCart className="text-4xl" />
      <Count>{cartCount}</Count>
    </Container>
  );
};

export default CartIcon;
