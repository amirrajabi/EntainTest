import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  id: string;
  title: string;
}

const initialState: CategoryState = {
  id: '',
  title: 'Next to Go',
};

export const categorySlice = createSlice({
  name: 'category',

  initialState,
  reducers: {
    getTitle: state => {
      state.title;
    },
    selectedCategory: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const {getTitle, selectedCategory} = categorySlice.actions;

export default categorySlice.reducer;
