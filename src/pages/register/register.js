import { FormRegister } from "../../components/register/form"
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserWarning,changeUserInput,registerUser } from "../../store/userReducer";

export function Register(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { nombre,email, password,loading, error, userData } = useSelector (({ userReducer })=>({
        nombre: userReducer.nombre,
        email: userReducer.email,
        password: userReducer.password,
        loading:userReducer.loading,
        error: userReducer.error,
        userData: userReducer.userData,
    }));

    function handleChange({target:{name,value}}){
        dispatch(UserWarning(false));
        dispatch(changeUserInput(name,value));
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(registerUser(nombre,email,password));
        dispatch(changeUserInput({name:'nombre',value:''}))
        dispatch(changeUserInput({name:'email',value:''}))
        dispatch(changeUserInput({name:'password',value:''}))
    }

    useEffect(()=>{
        if(userData?.token){
            localStorage.setItem('token',userData.token)
            navigate('/');
        }        
    })
    return (
        <>
        <FormRegister nombre={nombre} email={email} password={password} hanldeChange={handleChange} handleSubmit={handleSubmit}/>
        </>
    )
}