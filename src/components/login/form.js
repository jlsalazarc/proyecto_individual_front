import './form.css'
import Logos from '../img/Logo-risks.PNG'

export function FormLogin({email,password,handleChange,handleSubmit}){
return (
    <>
    <div className='formLogin'>
    <form className='form_box_login' onSubmit={handleSubmit}>
    <img src={Logos} alt='logo' height='150px' width='150px' padding-top='2rem'/>
    <h3>Iniciar Sesión</h3>
    <input type='text' name='email' placeholder='email' onChange={handleChange} value={email}/>
    <br></br>
    <input type='password' name='password' placeholder='password' onChange={handleChange} value={password}/>
    <br></br>
    <button>Ingresar</button>
    </form>
    </div>
    </>
)
}