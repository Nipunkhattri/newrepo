import * as api from '../api'
import { setcurrentUser } from './Currentuser';

export const signup = (authdata,navigate)=>async (dispatch)=>{
    try {
        console.log(authdata);
        const {data} = await api.signup(authdata);
        dispatch({type:'AUTH',data})
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem('AtgToken'))))
        navigate('/login2');
    } catch (error) {
        console.log(error);
    }
}

export const login = (authdata,navigate)=>async (dispatch)=>{
    try {
        console.log(authdata);
        const {data} = await api.login(authdata);
        console.log(data);
        dispatch({type:'AUTH',data})
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem('AtgToken'))))
        navigate('/dashboard');
    } catch (error) {
        console.log(error);
    }
}
