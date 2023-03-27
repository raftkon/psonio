import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Category from "./routes/category/category.component";
import Checkout from "./routes/checkout/checkout.component";
import HomePage from "./routes/homepage/homepage.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route element={<Authentication />} path="auth" />
        <Route path="shop">
          <Route index element={<Shop />} />
          <Route path=":category" element={<Category />} />
        </Route>
        <Route element={<Checkout />} path="checkout" />
      </Route>
    </Routes>
  );
};

export default App;
