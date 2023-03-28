import React from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title, idx) => (
          <div key={idx}>
            <CategoryPreview title={title} products={categoriesMap[title]} />
          </div>
        ))}
    </>
  );
};

export default CategoriesPreview;
