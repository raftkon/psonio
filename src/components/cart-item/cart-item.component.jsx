import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="flex py-2">
      <img
        src={imageUrl}
        alt="cart-item"
        className="rounded w-20 h-24 object-cover"
      />
      <div className="flex flex-col ml-4 justify-center items-start text-xs ">
        <h2>{name}</h2>
        <div className="">
          <span>{quantity}</span>
          <span> x {price}&euro;</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
