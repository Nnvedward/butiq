import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: null,
        isFetching: false,
        error: false
    },
    reducers: {
        // Create
        createOrderStart: (state) => {
            state.isFetching = true
        },
        createOrderSuccess: (state, action) => {
            state.isFetching = false
            state.orders = action.payload
        },
        createOrderFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const {
    createOrderStart,
    createOrderSuccess,
    createOrderFailure } = orderSlice.actions
export default orderSlice.reducer