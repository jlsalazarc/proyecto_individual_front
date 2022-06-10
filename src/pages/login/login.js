import { FormLogin } from "../../components/login/form"
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserWarning,changeUserInput,loginUser } from "../../store/userReducer";

export function Login(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { email, password,loading,error,userData } = useSelector (({ userReducer })=>({
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
        dispatch(loginUser(email,password));
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
        <FormLogin 
        email={email} 
        password={password} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}  
        />
        </>
    )
}