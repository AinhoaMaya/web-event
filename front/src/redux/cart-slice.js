import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: []
  },
  reducers: {
    addProduct: (state, action) => {

    },
    removeProduct: (state, action) => {

    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer
