import React from "react";
import CategoryItem from "../category-item/category-item.component";

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="w-[100%] flex flex-wrap justify-between">
      {categories.map((category) => (
        // category-container
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesMenu;
