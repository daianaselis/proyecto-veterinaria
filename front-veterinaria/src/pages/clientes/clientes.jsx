import React, { useEffect,useState } from 'react'
import ListadoClientes from '../../components/clientes/listadoClientes/listadoClientes'
import { buscarClientes } from '../../services/clienteService'
import { Link } from 'react-router-dom'

const Clientes = () => {
    const [clientes,setClientes]=useState([])

    const traerClientes =async()=>{
        const listaClientes = await buscarClientes();
        setClientes(listaClientes);
    }

    useEffect(()=>{
        traerClientes();
    },[])

    return (
        <div className='container'>
            <div className='m-4'>
                <Link className='btn btn-primary' to='/clientes/formulario'>Agregar nuevo cliente</Link>
            </div>
            <ListadoClientes clientes={clientes} updateList={traerClientes}/>
        </div>
    )
}

export default Clientes
