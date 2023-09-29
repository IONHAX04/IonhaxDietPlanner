import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
