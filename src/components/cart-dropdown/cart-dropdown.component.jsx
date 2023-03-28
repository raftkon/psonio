import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { toggleIsCartOpen } from "../../store/cart/cart.slice";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { Container, ItemsContainer, Text } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(toggleIsCartOpen());
  };

  return (
    <Container>
      {cartItems.length !== 0 ? (
        <ItemsContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </ItemsContainer>
      ) : (
        <Text>Your cart is empty.</Text>
      )}
      <Button
        className="h-[20%] mt-auto"
        buttonType={BUTTON_TYPES_CLASSES.base}
        onClick={goToCheckoutHandler}
      >
        Go To Checkout
      </Button>
    </Container>
  );
};

export default CartDropdown;
