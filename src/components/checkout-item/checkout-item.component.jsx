import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  Container,
  Cross,
  Img,
  ImgContainer,
  InnerContainer,
  Price,
  Quantity,
  Remove,
  Title,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addCartItem, decreaseCartItem, removeCartItem } =
    useContext(CartContext);
  return (
    <Container>
      <ImgContainer>
        <Img src={imageUrl} alt="checkout-item" />
      </ImgContainer>
      <Title>{name}</Title>
      <InnerContainer>
        <Cross onClick={() => decreaseCartItem(cartItem)}>&#8249;</Cross>
        <Quantity>{quantity}</Quantity>
        <Cross onClick={() => addCartItem(cartItem)}>&#8250;</Cross>
      </InnerContainer>
      <Price>{price}&euro;</Price>
      <Remove onClick={() => removeCartItem(cartItem)}>&#10005;</Remove>
    </Container>
  );
};

export default CheckoutItem;
