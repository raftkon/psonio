import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartTotal, cartItems } = useContext(CartContext);

  const headerTitles = ["Product", "Name", "Quantity", "Price", "Remove"];

  return (
    <div className="flex flex-col py-3 items-center min-h-[80vh] w-[70%] mx-auto">
      {/* header */}
      <div className="border-b-2 flex justify-between w-[100%] text-sm font-medium pb-2">
        {headerTitles.map((headerTitle) => (
          <div key={headerTitle} className="w-[23%] last:w-[8%]">
            <span>{headerTitle}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="ml-auto text-xl m-4 font-medium">
        Total: {cartTotal}&euro;
      </span>
    </div>
  );
};

export default Checkout;
