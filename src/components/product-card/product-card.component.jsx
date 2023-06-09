import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart/cart.slice";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { Container, Detail, Img, InnerContainer } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addCartItem(product));
  };

  return (
    <Container className="group">
      <Img src={imageUrl} alt={name} />
      <InnerContainer>
        <Detail>{name}</Detail>
        <Detail>{price}&euro;</Detail>
      </InnerContainer>
      <Button
        className=" w-[80%] opacity-[70%] absolute top-56 hidden
        group-hover:block hover:opacity-[95%]"
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Cart
      </Button>
    </Container>
  );
};

export default ProductCard;
