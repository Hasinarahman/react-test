import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: [
    {
      id: '1',
      name: 'Dragon 1',
      description: 'A reusable spacecraft...',
      reserved: true,
      image: "https://i.imgur.com/9fWdwNv.jpg",
    },
    {
      id: '2',
      name: 'Dragon 2',
      description: 'The second version...',
      reserved: false,
      image: 'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg',
    },
  ],
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    toggleReservation: (state, action) => {
      const dragon = state.dragons.find((d) => d.id === action.payload);
      if (dragon) {
        dragon.reserved = !dragon.reserved;
      }
    },
  },
});

export const { toggleReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
