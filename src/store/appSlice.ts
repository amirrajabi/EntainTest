import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  id: string;
}

const initialState: CategoryState = {
  id: '',
};

export const categorySlice = createSlice({
  name: 'category',

  initialState,
  reducers: {
    selectedCategory: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const {selectedCategory} = categorySlice.actions;

export default categorySlice.reducer;
