import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setCategories } from "../../store/categories/categories.slice";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Shop;
