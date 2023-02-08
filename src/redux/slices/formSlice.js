import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFormTitleValue: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCurrentFormTitleValue(state, action) {
      state.currentFormTitleValue = action.payload;
    },
  },
});

export const { setCurrentFormTitleValue } = formSlice.actions;
export default formSlice.reducer;
