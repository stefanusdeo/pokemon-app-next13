import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  lovePokemons: [],
};
export const list = createSlice({
  name: "lovePokemons",
  initialState,
  reducers: {
    addLove: (state, action) => {
      return {
        lovePokemons: action.payload,
      };
    },
  },
});

export const { addLove } = list.actions;
export default list.reducer;
