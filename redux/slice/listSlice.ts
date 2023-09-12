import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};
export const list = createSlice({
  name: "list",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      return {
        pokemons: action.payload,
      };
    },
  },
});

export const { addPokemon } = list.actions;
export default list.reducer;
