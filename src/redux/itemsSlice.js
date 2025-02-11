import { createSlice } from '@reduxjs/toolkit';

// Initial state for items and the current editing item
const initialState = {
  items: [],
  editingItem: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, id: Date.now() });
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setEditingItem: (state, action) => {
      state.editingItem = action.payload;
    },
    clearEditingItem: (state) => {
      state.editingItem = null;
    },
  },
});

export const { addItem, updateItem, deleteItem, setEditingItem, clearEditingItem } = itemsSlice.actions;


export default itemsSlice.reducer;
