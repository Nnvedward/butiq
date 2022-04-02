import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: null,
        isFetching: false,
        error: false
    },
    reducers: {
        // GET ALL
        getCategoryStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getCategorySuccess: (state) => {
            state.isFetching = false
            state.categories = action.payload
        },
        getCategoryFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

const {  } = categorySlice.actions
export default categorySlice.reducer