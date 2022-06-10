{/*import './NewProductDetail.css'
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from '../../components/user/header'; 


export function DestinyDetail () {
    const navigate =useNavigate ();
    const {projectId} = useParams();
    const [destinydetail, setDestinydetail] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

   

    useEffect(() =>{
        axios({
            method:'GET',
            baseURL: process.env.BASE_URL,
            url:`/proyectos`,
        })
            .then(({data}) => setDestinydetail(data))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    if(loading) return <p>Loading...</p>
    if(error) return <p>error</p>
    },[]);


    return(
        <>
        <div className = "index" >
            <header className='header'>
                <Header/>
            </header>
            <div className = "body_destinydetail">
                <div className = "body_destinydetail_description">            {console.log(destinydetail.descripcion)}
                    <p>{destinydetail.descripcion}</p>
                </div>
                <div className = "body_destinydetail_description">
                    <h2>Comentarios</h2>
                </div>
            </div>
        </div>
        </>
    )
}
*/}