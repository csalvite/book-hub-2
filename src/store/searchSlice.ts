import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
  selectedCategory: string | null;
}

const initialState: SearchState = {
  searchTerm: '',
  selectedCategory: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = searchSlice.actions;
export default searchSlice.reducer;