import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import {
  Container,
  HeaderTitle,
  HeaderTitleContainer,
  HeaderTitlesContainer,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  console.log(cartItems);
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
      {cartItems.length !== 0 ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <div className="h-64 flex justify-center items-center">
          <span className="text-xl font-normal">Your cart is empty.</span>
        </div>
      )}
      <Total>Total: {cartTotal}&euro;</Total>
    </Container>
  );
};

export default Checkout;
