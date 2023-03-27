import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addCartItem, decreaseCartItem, removeCartItem } =
    useContext(CartContext);
  return (
    <div className="flex items-center min-h-[100px] py-3 mx-auto w-[100%]">
      <div className="w-[23%] h-52 pr-4">
        <img src={imageUrl} alt="" className="rounded h-full w-full" />
      </div>
      <span className="w-[23%] pl-4">{name}</span>
      <div className="cursor-pointer  w-[23%] flex  items-center">
        <span
          className="cursor-pointer text-3xl"
          onClick={() => decreaseCartItem(cartItem)}
        >
          &#8249;
        </span>
        <span className="text-xl mx-3 ">{quantity} </span>
        <span
          className="cursor-pointer text-3xl"
          onClick={() => addCartItem(cartItem)}
        >
          &#8250;
        </span>
      </div>
      <span className=" w-[23%]">{price}&euro;</span>
      <div
        className="cursor-pointer w-[8%] pl-3"
        onClick={() => removeCartItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
