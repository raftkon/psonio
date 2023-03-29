import React from "react";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  decreaseCartItem,
  removeCartItem,
} from "../../store/cart/cart.slice";
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
  const dispatch = useDispatch();

  const handleDecrease = () => dispatch(decreaseCartItem(cartItem));
  const handleAdd = () => dispatch(addCartItem(cartItem));
  const handleRemove = () => dispatch(removeCartItem(cartItem));

  return (
    <Container>
      <ImgContainer>
        <Img src={imageUrl} alt="checkout-item" />
      </ImgContainer>
      <Title>{name}</Title>
      <InnerContainer>
        <Cross onClick={handleDecrease}>&#8249;</Cross>
        <Quantity>{quantity}</Quantity>
        <Cross onClick={handleAdd}>&#8250;</Cross>
      </InnerContainer>
      <Price>{price}&euro;</Price>
      <Remove onClick={handleRemove}>&#10005;</Remove>
    </Container>
  );
};

export default CheckoutItem;
