import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesThunk = createAsyncThunk(
  "categories/fetchCategories",
  async () => await getCategoriesAndDocuments()
);

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoriesThunk.rejected, (state, action) => {
      state.isLoading = false;
      console.log("WTF IS GOING ONN", action);
      state.error = action.error.message;
    });
    builder.addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
