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
    <Container onClick={onNavigateHandler}>
      <Img
        src={imageUrl}
        alt={title}
        className="w-[100%] h-[100%] bg-cover bg-center object-cover transition duration-1000 group-hover:scale-110 group-hover:ease-in-out"
      />
      <InnerContainer>
        <Title>{title}</Title>
        <Text>Shop Now</Text>
      </InnerContainer>
    </Container>
  );
};

export default CategoryItem;
