import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title, idx) => (
        <div key={idx}>
          <CategoryPreview title={title} products={categoriesMap[title]} />
        </div>
      ))}
    </>
  );
};

export default Shop;
