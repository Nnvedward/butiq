import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest, userRequest } from '../requestMethods'
import { deleteProductStart, deleteProductSuccess, deleteProductFailure, getProductFailure, getProductStart, getProductSuccess, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure } from "./productRedux"

// Login user
export const login = async (dispatch, user) => {
    dispatch(loginStart())

    try{
        const res = await publicRequest.post('/auth/sign-in', user)
        dispatch(loginSuccess(res.data.data))
    } catch(err) {
        dispatch(loginFailure())
    }
}

// Get products
export const getProducts = async (dispatch) => {
    dispatch(getProductStart())

    try{
        const res = await publicRequest.get('/item')
        dispatch(getProductSuccess(res.data.data))
    } catch(err) {
        dispatch(getProductFailure())
    }
}

// Delete product
export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())

    try{
        const res = await userRequest.delete(`/item/${id}`)
        dispatch(deleteProductSuccess(res.data.data))
    } catch(err) {
        dispatch(deleteProductFailure())
    }
}

// Update product
export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart())

    try{
        const res = await userRequest.patch(`/item/update/${id}`, product)
        dispatch(updateProductSuccess(res.data.data))
    } catch(err) {
        dispatch(updateProductFailure())
    }
}

// Add product
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart())

    try{
        const res = await userRequest.post('/item/create', product)
        dispatch(addProductSuccess(res.data.data))
    } catch(err) {
        dispatch(addProductFailure())
    }
}