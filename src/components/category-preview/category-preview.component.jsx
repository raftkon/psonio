import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { Products, Title } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <>
      <Title>
        <Link to={title}>{title.toUpperCase()}</Link>
      </Title>
      <Products>
        {products.map((product, idx) => {
          if (idx < 4) {
            return <ProductCard key={product.id} product={product} />;
          }
          return null;
        })}
      </Products>
    </>
  );
};

export default CategoryPreview;
