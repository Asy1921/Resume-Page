import { configureStore } from '@reduxjs/toolkit'
import AqiSlice from './features/AqiSlice/AqiSlice'

export const store = configureStore({
  reducer: {aqi:AqiSlice},
})