import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Task: [],
}

export const taskSlice = createSlice({
  name: 'addTask',
  initialState,
  reducers: {
    addTask: (state, action ) => {
        state.Task = [...state.Task, action];
        console.log(action);
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask } = taskSlice.actions

export default taskSlice.reducer