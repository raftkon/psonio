import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../../components/button/button.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import {
  CapitalLetter,
  CartContainer,
  Container,
  Footer,
  InnerContainer,
  LinksContainer,
  LogoContainer,
  RestLetters,
  ShopLink,
  SignInLink,
} from "./navigation.styles";

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
    <Container>
      <InnerContainer>
        <Link to="/">
          <LogoContainer>
            <CapitalLetter className="text-6xl text-rose-500 font-extrabold ">
              P
            </CapitalLetter>
            <RestLetters className="text-3xl text-amber-400">
              sonio.
            </RestLetters>
          </LogoContainer>
        </Link>
        {/* links container */}
        <LinksContainer>
          <ShopLink to={"/shop"}>Shop</ShopLink>
          {currentUser ? (
            <Button onClick={handleSignOut} buttonType="inverted">
              Sign Out
            </Button>
          ) : (
            <SignInLink
              className="text-white px-4 py-2 border rounded-lg bg-rose-600 
            transition-all duration-300 hover:translate-x-2 hover:shadow hover:shadow-rose-300"
              to="/auth"
            >
              Sign In &rarr;
            </SignInLink>
          )}
          <CartContainer onClick={toggleIsCartOpen}>
            <CartIcon onClick={toggleIsCartOpen} />
          </CartContainer>
          {isCartOpen && <CartDropdown />}
        </LinksContainer>
      </InnerContainer>

      <Outlet />
      <Footer className="mt-auto border-t-2 min-w-[100%] h-[60px]"></Footer>
    </Container>
  );
};

export default Navigation;
