import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { borrarCliente } from '../../../services/clienteService';

const ListadoClientes = (props) => {
    const { clientes, updateList } = props;
    const navigate = useNavigate()

    // funcion para llamar al servicio de borrar
    //     borrar cliente
    //     actualizar la lista
    const eliminarCliente = (id_cliente) => {
        const resultado = borrarCliente(id_cliente)
        alert("Cliente borrado exitosamente");
        updateList()
    }
    const modificarCliente = (id_cliente) => {
        navigate(`/clientes/formulario/${id_cliente}`)

    }
    return (
        <div className='container'>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre y Apellido</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((cliente) => {
                            return (
                                <tr>
                                    <td scope="col">{cliente.id_cliente}</td>
                                    <td scope="col">{cliente.nom_ap}</td>
                                    <td scope="col">{cliente.direccion}</td>
                                    <td scope="col">{cliente.email}</td>
                                    <td scope="col">{cliente.telefono}</td>
                                    <td>
                                        <button className='btn ' onClick={() => modificarCliente(cliente.id_cliente)}><i className='bi bi-pencil-square' /></button>
                                        <button className='btn' onClick={() => { eliminarCliente(cliente.id_cliente) }}><i className='bi bi-trash' /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default ListadoClientes
