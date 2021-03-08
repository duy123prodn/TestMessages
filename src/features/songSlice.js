import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
  name: 'songs',
  initialState: {
    songList: [],
  },
  reducers: {
    addSong: (state, action) => {
      state.songList = [...state.songList, action.payload]
    },
  },
});

export const { addSong } = songSlice.actions;


export default songSlice.reducer;
