import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};
export const paginate = createSlice({
  name: "paginate",
  initialState,
  reducers: {
    changePage: (state, action) => {
      return {
        page: action.payload,
      };
    },
  },
});

export const { changePage } = paginate.actions;
export default paginate.reducer;
