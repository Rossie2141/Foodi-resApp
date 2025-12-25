import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: "home", // default
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = navigationSlice.actions;
export default navigationSlice.reducer;
