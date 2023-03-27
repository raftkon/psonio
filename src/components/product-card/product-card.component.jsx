import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { addCartItem } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addCartItem(product);
  };

  return (
    // <div className="border p-2 m-2 flex-col w-60 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-slate-200 rounded ">
    <div
      className="group w-full flex flex-col rounded relative items-center h-80 
      border shadow-[0_4px_8px_0_rgba(31,38,135,0.37)]
      bg-[rgba(255,255,255,0.45)]"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[90%] rounded object-cover group-hover:opacity-[90%]"
      />
      <div className="w-full h-[10%] flex justify-between items-center text-base p-4">
        <span className="w-[90%]">{name}</span>
        <span className="w-[10%]">{price}&euro;</span>
      </div>
      {/* <div className="w-[80%] opacity-[70%] absolute top-60 hidden hover:flex hover:opacity-[95%]"> */}
      <Button
        className="w-[80%] opacity-[70%] absolute top-56 hidden
        group-hover:block hover:opacity-[95%]"
        buttonType="inverted"
        onClick={addProductToCart}
      >
        Add To Cart
      </Button>
      {/* </div> */}
    </div>
  );
};

export default ProductCard;
