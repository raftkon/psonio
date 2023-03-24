import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-4 mb-6">
      {products.map(({ name, id, price, imageUrl }) => (
        <ProductCard key={id} name={name} price={price} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Shop;
