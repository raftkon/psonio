import React from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import Spinner from "../spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title, idx) => (
          <div key={idx}>
            <CategoryPreview title={title} products={categoriesMap[title]} />
          </div>
        ))
      )}
    </>
  );
};

export default CategoriesPreview;
