import axios from "axios";

export const CREAR_PROYECTO_LOADING='CREAR_PROYECTO_LOADING';
export const CREAR_PROYECTO_FAIL='CREAR_PROYECTO_FAIL';
export const CREAR_PROYECTO_SUCESS='CREAR_PROYECTO_SUCESS';
export const PROYECTO_WARNING='PROYECTO_WARNING';
export const CHANGE_PROYECTO_INPUT='CHANGE_PROYECTO_INPUT';
export const CLEAN_INPUT='CLEAN_INPUT';
export function ProyectoWarning(value){
    return {
        type:PROYECTO_WARNING,
        payload:value,
    }
}

export function changeProyectoInput(name,value){
    return {
        type:CHANGE_PROYECTO_INPUT,
        payload:{name,value},
    }
}

export function cleanInput(data){
    return {
        type:CLEAN_INPUT,
        payload:data,
    }
}

export function crearProyecto(nombre,descripcion,objetivo){
    return async function(dispatch){
        try{
            dispatch({type:CREAR_PROYECTO_LOADING});
            const token = localStorage.getItem('token')
            const { data }=await axios ({
                method:'POST',
                baseURL:process.env.REACT_APP_API,
                url:`/proyectos/`,
                data:{nombre,descripcion,objetivo},
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({type:CREAR_PROYECTO_SUCESS,payload:data});
        }catch(error){
            dispatch({type:CREAR_PROYECTO_FAIL})
        }}
}
const initialState={
    loading:false,
    nombre:'',
    descripcion:'',
    objetivo:'',
    error:null,
    proyecto:{},
}

export function proyectoReducer(state=initialState,{type,payload}){
    switch(type){
        case CREAR_PROYECTO_LOADING:
            return {
                ...state,
                loading:true,
                error:null,
            };
        case CREAR_PROYECTO_FAIL:
            return{
                ...state,
                loading:false,
                error:true,
            };
        case CREAR_PROYECTO_SUCESS:
            return{
                ...state,
                loading:false,
                proyecto:payload,
            };
        case CHANGE_PROYECTO_INPUT:
            return {
                ...state,
                [payload.name]:payload.value,
            };
        case PROYECTO_WARNING:
            return {
                ...state,
                error:payload,
            }
        default:
            return state;

    }
}