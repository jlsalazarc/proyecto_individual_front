
export function FormRegister({nombre,email,password,handleSubmit,hanldeChange}){
    return (
        <>
        <div className='formRegister'>
        <form className='form_box_login' onSubmit={handleSubmit} >
        <input type='text' name='nombre' placeholder='nombre' onChange={hanldeChange} value={nombre}/><br></br>
        <input type='text' name='email' placeholder='email' onChange={hanldeChange} value={email}/>
        <br></br>
        <input type='password' name='password'  placeholder='password' onChange={hanldeChange} value={password }/>
        <br></br>
        <button>Registrarse</button>
        </form>
        </div>
        </>
    )
}