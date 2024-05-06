import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const userSlice = createSlice({
  name: "hiddenArticles",
  initialState,
  reducers: {
    addHiddenArticles: (state, action) => {
      state.value.push(action.payload);
    },
    removeHiddenArticles: (state) => {
      state.value = [];
    },
  },
});

export const { addHiddenArticles, removeHiddenArticles } = userSlice.actions;
export default userSlice.reducer;
