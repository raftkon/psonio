import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import { ProductsContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductsContainer>
      )}
    </>
  );
};

export default Category;
