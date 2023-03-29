import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
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
      <div className="my-auto w-full">
        {cartItems.length !== 0 ? (
          cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div className="h-64 flex justify-center items-center">
            <span className="text-lg font-normal">Your cart is empty</span>
          </div>
        )}
      </div>
      <Total>Total: {cartTotal}&euro;</Total>
      <PaymentForm />
    </Container>
  );
};

export default Checkout;
