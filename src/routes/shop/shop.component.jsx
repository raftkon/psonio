import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setCategoriesArray } from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log(categoriesArray);
      dispatch(setCategoriesArray(categoriesArray));
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
