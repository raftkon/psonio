import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Img,
  InnerContainer,
  Text,
  Title,
} from "./category-item.styles";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate(`/shop/${title}`);
  };
  return (
    <Container onClick={onNavigateHandler} className="group">
      <Img src={imageUrl} alt={title} />
      <InnerContainer>
        <Title>{title}</Title>
        <Text>Shop Now</Text>
      </InnerContainer>
    </Container>
  );
};

export default CategoryItem;
