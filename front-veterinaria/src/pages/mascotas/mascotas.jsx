import React, { useEffect, useState } from 'react'
import ListadoMascotas from '../../components/mascotas/listadoMascotas/listadoMascotas'
import { buscarMascotas } from '../../services/mascotasService'
import { Link } from 'react-router-dom'

const Mascotas = () => {
    const [mascotas, setMascotas] = useState([])

    const traerMascotas = async () => {
        const listaMascotas = await buscarMascotas();
        setMascotas(listaMascotas);
    }

    useEffect(() => {
        traerMascotas();
    }, [])

    return (
        <div className='container'>
            <div className='m-4'>
                <Link className='btn btn-primary' to='/mascotas/formulario'>Agregar nuevo Paciente</Link>
            </div>
            <ListadoMascotas mascotas={mascotas} updateList={traerMascotas} />
        </div>
    )
}
export default Mascotas;