import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div
      className="absolute right-20 top-16 rounded border border-black flex flex-col 
      p-5 w-64 h-80 z-10 bg-white transition"
    >
      {cartItems.length !== 0 ? (
        <div className="h-60 flex flex-col overflow-auto mb-1">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
      ) : (
        <span className="flex h-[80%] justify-center items-center font-light">
          Your cart is empty.
        </span>
      )}
      {/* Cart Items */}
      <Button className="h-[20%] mt-auto ">
        <Link to={"/checkout"}>Go To Checkout</Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
