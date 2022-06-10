import axios from "axios";

export const CHANGE_USER_INPUT='CHANGE_USER_INPUT';
export const REGISTER_USER_LOADING='REGISTER_USER_LOADING';
export const REGISTER_USER_SUCCESS='REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL='REGISTER_USER_FAIL';
export const LOGIN_USER_LOADING='LOGIN_USER_LOADING';
export const LOGIN_USER_SUCCESS='LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL='LOGIN_USER_FAIL';
export const CLEAN_INPUT='CLEAN_INPUT';
export const USER_WARNING='USER_WARNING';
export const USER_LGOUT='USER_LGOUT';

const initialState={
    nombre:"",
    email:"",
    password:"",
    loading:false,
    error:false,
}

export function UserWarning(value){
    return {  
        type:USER_WARNING,
        payload:value,
    }
}

export function cleanInput(data){
    return {
        type:CLEAN_INPUT,
        payload:data,
    }
}

export function changeUserInput(name,value){
    return {
        type:CHANGE_USER_INPUT,
        payload:{name,value}
    }
}

export function registerUser(nombre,email, password) {
    return async function (dispatch) {
        try {
            dispatch({ type: REGISTER_USER_LOADING });
            const { data } = await axios({
            method: 'POST',
            baseURL:process.env.REACT_APP_API,
            url: '/users/signup',
            data: {nombre,email, password },
        });
        dispatch({ type: REGISTER_USER_SUCCESS, payload:data});
        } 
        catch(e) {
        dispatch(UserWarning({error:true}));
        dispatch(cleanInput({name:'email',value:''}));
        dispatch(cleanInput({name:'password',value:''}));
        } 
    }
}

export function loginUser(email,password) {
    return async function(dispatch) {
        try {
            const { data } = await axios({
            method: 'POST',
            baseURL:process.env.REACT_APP_API,
            url: '/users/signin',
            data:{email,password},
        })
        dispatch({ type:LOGIN_USER_SUCCESS, payload: data }) 
        } 
        catch(e) {
        dispatch(UserWarning(true));
        dispatch(cleanInput({name:'email',value:''}));
        dispatch(cleanInput({name:'password',value:''}));
        } 
    }
}

export function Logout(){
    return {
        type:USER_LGOUT,
    }
}

export function userReducer(state=initialState,{type, payload}){
    switch(type){
        case CHANGE_USER_INPUT:
            return {
                ...state,
                [payload.name]:payload.value,
            };
        case REGISTER_USER_LOADING:
            return {
                ...state,
                loading:true,
            };
        case LOGIN_USER_LOADING:
            return {
                ...state,
                loading:true,
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                error:false,
                loading:false,
                userData:payload,
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                error:false,
                loading:false,
                userData:payload,
            };
        case LOGIN_USER_FAIL:
            return{
                ...state,
                error:true,
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                error:true,
            }
        case CLEAN_INPUT:
            return{
            ...state,
            [payload.name]:payload.value,
            };
        case USER_WARNING:
            return {
                ...state,
                error:payload,
            };
        case USER_LGOUT:
            return {
                ...state,
                email:'',
                password:'',
                userData:null,
            };
        default:
            return state;
    }
}