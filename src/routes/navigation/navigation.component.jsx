import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../../components/button/button.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
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
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { toggleIsCartOpen } from "../../store/cart/cart.slice";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    await signOutUser();
  };

  const toggleCartHandler = () => {
    dispatch(toggleIsCartOpen());
  };
  return (
    <Container>
      <InnerContainer>
        <Link to="/">
          <LogoContainer>
            <CapitalLetter>P</CapitalLetter>
            <RestLetters>sonio.</RestLetters>
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
            <SignInLink to="/auth">Sign In &rarr;</SignInLink>
          )}
          <CartContainer onClick={toggleCartHandler}>
            <CartIcon />
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
