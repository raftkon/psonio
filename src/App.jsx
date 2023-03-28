import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./components/categories-preview/categories-preview.component";
import Authentication from "./routes/authentication/authentication.component";
import Category from "./routes/category/category.component";
import Checkout from "./routes/checkout/checkout.component";
import HomePage from "./routes/homepage/homepage.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import { setCurrentUser } from "./store/user/user.slice";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser = user && {
        accessToken: user.accessToken,
        email: user.email,
      };
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route element={<Authentication />} path="auth" />
        <Route path="shop" element=<Shop />>
          <Route index element={<CategoriesPreview />} />
          <Route path=":category" element={<Category />} />
        </Route>
        <Route element={<Checkout />} path="checkout" />
      </Route>
    </Routes>
  );
};

export default App;
