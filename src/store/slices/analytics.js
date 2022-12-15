import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    addToCart: (state) => {

    }
  },
  extraReducers: {
    "cart/addToCart": (state) => {
      console.log('test');
      const val = Promise.resolve(1);
      if (typeof val === 'number') {
        state.value = state.value + val;
      }
      // return state;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart  } = analyticsSlice.actions

export default analyticsSlice.reducer