import { configureStore } from '@reduxjs/toolkit'
import taskSlice from '../featuers/TaskSlice'

export const store = configureStore({
  reducer: {
    Tasks: taskSlice,
  },
})