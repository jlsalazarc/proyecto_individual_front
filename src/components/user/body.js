import './body.css'
import { Link } from 'react-router-dom';
import np from '../img/nuevos_productos.png'
import crea from '../img/crear.png'
import modifica from '../img/Modificar.png'


export function Body(){
    return (
        <div className="destinosCard-container">
            
            <div className="destinosCard-container_img">
                <Link to='/project'>
                    <img src={np} alt="crear" width="240" height="192"/>
                    <h3>Mis Nuevos Productos</h3>
                </Link>
            </div>

            <div className="destinosCard-container_img">
                <Link to='/newproject'>
                    <img src={crea} alt="crear" width="240" height="192"/>
                    <h3>Crear Nuevo Producto</h3>
                </Link>
            </div>
            <div className="destinosCard-container_img">
                <img src={modifica} alt="modifica" width="240" height="192"/>
                <h3>Modificar Nuevo Producto</h3>
            </div>
        </div>
  )
  }