import React from 'react'
import { useState, useEffect } from 'react'
import { borrarMascota } from '../../../services/mascotasService';
import { useNavigate } from 'react-router-dom'

const ListadoMascotas = (props) => {

    const { mascotas, updateList } = props;
    const navigate = useNavigate()
    console.log(props)

    // funcion para llamar al servicio de borrar
    //     borrar mascota
    //     actualizar la lista
    const eliminarMascota = (id_mascota) => {
        const resultado = borrarMascota(id_mascota)
        alert("Mascota borrado exitosamente");
        updateList()
    }
    const modificarMascota = (id_mascota) => {
        navigate(`/mascotas/formulario/${id_mascota}`)
    }

    return (
        <div className='container'>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre de la mascota</th>
                        <th scope="col">Especie</th>
                        <th scope="col">Raza</th>
                        <th scope="col">Fecha de fecha_nacimiento</th>
                        <th scope="col">ID_CLIENTE</th>
                        <th scope='col'> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mascotas.map((mascota) => {
                            return (
                                <tr>
                                    <td scope="col">{mascota.id_mascota}</td>
                                    <td scope="col">{mascota.nom_mascota}</td>
                                    <td scope="col">{mascota.especie}</td>
                                    <td scope="col">{mascota.raza}</td>
                                    <td scope="col">{mascota.fecha_nacimiento}</td>
                                    <td scope="col">{mascota.id_cliente}</td>
                                    <td>
                                        <button className='btn ' onClick={() => {modificarMascota(mascota.id_mascota)}}><i className='bi bi-pencil-square' /></button>
                                        <button className='btn' onClick={() => { eliminarMascota(mascota.id_mascota) }}><i className='bi bi-trash' /></button>
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

export default ListadoMascotas
