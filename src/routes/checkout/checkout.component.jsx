import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  Container,
  HeaderTitle,
  HeaderTitleContainer,
  HeaderTitlesContainer,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartTotal, cartItems } = useContext(CartContext);

  const headerTitles = ["Product", "Name", "Quantity", "Price", "Remove"];

  return (
    <Container>
      <HeaderTitlesContainer>
        {headerTitles.map((headerTitle) => (
          <HeaderTitleContainer key={headerTitle}>
            <HeaderTitle>{headerTitle}</HeaderTitle>
          </HeaderTitleContainer>
        ))}
      </HeaderTitlesContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: {cartTotal}&euro;</Total>
    </Container>
  );
};

export default Checkout;
