import { configureStore } from '@reduxjs/toolkit';
import songsReducer from '../features/songSlice';

export default configureStore({
  reducer: {
    songs: songsReducer,
  },
}); 