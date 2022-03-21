import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest } from '../requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginStart())

    try{
        const res = await publicRequest.post('/auth/sign-in', user)
        dispatch(loginSuccess(res.data.data))
    } catch(err) {
        dispatch(loginFailure())
    }
}