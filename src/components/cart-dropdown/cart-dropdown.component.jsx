import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { Container, ItemsContainer, Text } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
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
