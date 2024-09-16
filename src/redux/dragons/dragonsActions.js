import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchData',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/dragons');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const reserveDragon = (dragonId) => (dispatch, getState) => {
  const { dragons } = getState().dragons;
  const updatedDragons = dragons.map((dragon) =>
    dragon.id === dragonId ? { ...dragon, reserved: true } : dragon
  );
  dispatch({
    type: 'dragons/reserveDragon',
    payload: updatedDragons,
  });
};

//  برای لغو رزرو 
export const cancelBooking = (dragonId) => (dispatch, getState) => {
  const { dragons } = getState().dragons;
  const updatedDragons = dragons.map((dragon) =>
    dragon.id === dragonId ? { ...dragon, reserved: false } : dragon
  );
  dispatch({
    type: 'dragons/cancelBooking',
    payload: updatedDragons,
  });
};