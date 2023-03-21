import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/auth/auth.component";
import HomePage from "./routes/homepage/homepage.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route element={<Authentication />} path="auth" />
      </Route>
    </Routes>
  );
};

export default App;
