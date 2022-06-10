import './product.css'
import axios from "axios";
import { useState,useEffect } from "react";
import {ProductCard} from '../../components/product/product';
import { Header } from '../../components/user/header';

function Data() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState([]);
    useEffect(()=>{
      axios ({
        method: 'GET',
        baseURL: process.env.REACT_APP_API,
        url: '/proyectos/',
        params:{ limit: 9 },
      })
      .then (({data})=>setProduct(data))
      .catch((error)=>setError(true))
      .finally(()=>{setLoading(false);})
    },[])
    if(loading) return <p><strong>Cargando...</strong></p>
    if(error) return <p><strong>Algo salió mal... Inténtalo más tarde</strong></p>
    return (
      <div>
        <ProductCard product={product} />
      </div>
    );
    
    }

    export function Product(){

        return (
            <div className = "product" >
                <header className='header'>
                    <Header/>
                </header>

                <div className='data'>
                    <h1>Revisa tus nuevos productos</h1>
                    <Data/>
                </div>
            </div>
        );
    }
    