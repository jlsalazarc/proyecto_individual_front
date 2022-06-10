import { Header } from '../user/header';
import './style.css';
export function CrearProyecto({nombre,descripcion,objetivo,loading,error,handleChange,handleSubmit}){
    return (
        <div className = "proyecto_nuevo" >
            <header className="header">
                <Header/>
            </header>
            <div className = "proyecto_nuevo_form">
            <form onSubmit={handleSubmit} className='FormCrear'>
                <h3>Crear Proyecto</h3>
                <input type='text' name='nombre' placeholder='Nombre proyecto' value={nombre} onChange={handleChange}/><br></br>
                <textarea  type='text' name='descripcion' placeholder='Descripcion' value={descripcion} onChange={handleChange}/><br></br>
                <input type='text' name='objetivo' placeholder='Objetivo' value={objetivo} onChange={handleChange}/><br></br>
                <button>Crear Proyecto</button>
            </form>
            </div>
        </div>
    )
}