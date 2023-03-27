import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../../components/button/button.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutUser();
  };

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="container mx-auto flex flex-col min-h-screen ">
      {/* navigation */}
      <div
        className="px-6 py-2 mb-4 border-b-2 
        flex justify-between items-center"
      >
        <Link to="/">
          <div className="drop-shadow-md">
            <span className="text-6xl text-rose-500 font-extrabold ">P</span>
            <span className="text-3xl text-amber-400">sonio.</span>
          </div>
        </Link>
        {/* links container */}
        <div className="space-x-4 flex items-center">
          <Link to={"/shop"} className="font-medium">
            Shop
          </Link>
          {currentUser ? (
            <Button onClick={handleSignOut} buttonType="inverted">
              Sign Out
            </Button>
          ) : (
            <Link
              className="text-white px-4 py-2 border rounded-lg bg-rose-600 
              transition-all duration-300 hover:translate-x-2 hover:shadow hover:shadow-rose-300"
              to="/auth"
            >
              Sign In &rarr;
            </Link>
          )}
          <div
            className="relative flex justify-center"
            onClick={toggleIsCartOpen}
          >
            <CartIcon onClick={toggleIsCartOpen} />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
      <footer className="mt-auto border-t-2 min-w-[100%] h-[60px]"></footer>
    </div>
  );
};

export default Navigation;
