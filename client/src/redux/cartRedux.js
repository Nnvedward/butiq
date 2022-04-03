import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.quantity -= 1
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload.id), 1
            )
        },
        getTotals: (state, action) => {
            let { total, quantity } = state.products.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem
                const itemTotal = price * quantity

                cartTotal.total += itemTotal
                cartTotal.quantity += quantity

                return cartTotal
            }, {
                total: 0,
                quantity: 0
            })

            state.quantity = quantity
            state.total = total
        }
    }
})

export const { addProduct, removeProduct, getTotals } = cartSlice.actions
export default cartSlice.reducer