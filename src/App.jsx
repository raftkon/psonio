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
      async function setUser(user) {
        if (user) {
          const userSnapshot = await createUserDocumentFromAuth(user);
          const userData = await userSnapshot.data();
          const pickedUser = userData && {
            accessToken: user.accessToken,
            email: userData.email,
            displayName: userData.displayName,
          };
          dispatch(setCurrentUser(pickedUser));
        } else {
          dispatch(setCurrentUser(user));
        }
      }
      setUser(user);
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
