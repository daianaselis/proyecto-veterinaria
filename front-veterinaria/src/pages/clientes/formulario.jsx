import React, { useEffect } from 'react'
import { useState } from 'react';
import FormClientes from '../../components/clientes/formClientes/formClientes'
import { buscarClientes, singleCLiente } from '../../services/clienteService';
import { useParams } from 'react-router-dom';
const Formulario = () => {
    let { id_cliente } = useParams();
    const [cliente,setCliente]=useState(null);

    useEffect(() => {
        if (id_cliente) {
            singleCLiente(id_cliente).then(result => {
                setCliente(result)
            })
        }
    }, [])

    return (
        <FormClientes cliente={cliente} />
    )
}

export default Formulario
