import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <>
      <h2 className="text-2xl my-4 font-semibold">
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="grid grid-cols-4 gap-x-2 gap-y-4 mb-6">
        {products.map((product, idx) => {
          if (idx < 4) {
            return <ProductCard key={product.id} product={product} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default CategoryPreview;
