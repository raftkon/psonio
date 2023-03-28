import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchCategoriesThunk } from "../../store/categories/categories.slice";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Shop;
