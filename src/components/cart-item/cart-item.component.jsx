import React from "react";
import {
  Container,
  Detail,
  DetailsContainer,
  Img,
  InnerContainer,
  Title,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <Container>
      <Img src={imageUrl} alt="cart-item" />
      <InnerContainer>
        <Title>{name}</Title>
        <DetailsContainer>
          <Detail>{quantity}</Detail>
          <Detail>x {price}&euro;</Detail>
        </DetailsContainer>
      </InnerContainer>
    </Container>
  );
};

export default CartItem;
