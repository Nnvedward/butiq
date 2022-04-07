import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: null,
        isFetching: false,
        error: false
    },
    reducers: {
         //ADD
         addCategoryStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        addCategorySuccess: (state, action) => {
            state.isFetching = false 
            state.products.push(action.payload)
        },
        addCategoryFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const { addCategoryStart, addCategorySuccess, addCategoryFailure } = categorySlice.actions
export default categorySlice.reducer