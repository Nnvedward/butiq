import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest, userRequest } from '../requestMethods'
import { deleteProductStart, deleteProductSuccess, deleteProductFailure, getProductFailure, getProductStart, getProductSuccess } from "./productRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart())

    try{
        const res = await publicRequest.post('/auth/sign-in', user)
        dispatch(loginSuccess(res.data.data))
    } catch(err) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())

    try{
        const res = await publicRequest.get('/item')
        dispatch(getProductSuccess(res.data.data))
    } catch(err) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())

    try{
        const res = await userRequest.delete(`/item/${id}`)
        dispatch(deleteProductSuccess(res.data.data))
    } catch(err) {
        dispatch(deleteProductFailure())
    }
}