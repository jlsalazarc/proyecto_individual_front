import './navbar.css'
import { useState } from 'react';


export function Navbar(){
    const [menuList] = useState([
        {codigo: 1, nombre: 'Mis Nuevos productos', ref: 'project'}, 
        {codigo: 2, nombre: 'Buscar mi Riesgo',ref: 'stories'},
        {codigo: 3, nombre: 'Buscar mi Impacto', ref: 'experiencias'}]);

    return (

            <ul>
            {                
                menuList.map((menu) => {
                    return (
                        <li key={menu.codigo}><a href="/">{menu.nombre}</a></li>
                    )
                })
            }
        </ul>
                
    );
}