import { CrearProyecto } from "../../components/proyectos/proyectos"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "../../components/user/header";
import './style.css';
import { changeProyectoInput,crearProyecto,ProyectoWarning } from "../../store/proyectoReducer";
export function Proyectos(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { nombre,descripcion,objetivo,loading, error, proyecto} = useSelector (({ proyectoReducer})=>({
        nombre: proyectoReducer.nombre,
        descripcion: proyectoReducer.descripcion,
        objetivo:proyectoReducer.objetivo,
        loading:proyectoReducer.loading,
        error: proyectoReducer.error,
        proyecto:proyectoReducer.proyecto,
    }));

    function handleChange({target:{name,value}}){
        dispatch(ProyectoWarning(false));
        dispatch(changeProyectoInput(name,value));
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(crearProyecto(nombre,descripcion,objetivo));
        dispatch(changeProyectoInput({name:'nombre',value:''}))
        dispatch(changeProyectoInput({name:'descripcion',value:''}))
        dispatch(changeProyectoInput({name:'objetivo',value:''}))
    }
    return (
            <div className = "index" >
                <header className="header">
                    <Header/>
                </header>
                <div className="CrearProyectoForm">
                <CrearProyecto 
                    nombre={nombre}
                    descripcion={descripcion}
                    objetivo={objetivo}
                    loading={loading}
                    error={error}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                </div>
            </div>
    )
}