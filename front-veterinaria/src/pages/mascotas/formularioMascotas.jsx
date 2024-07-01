import React, { useEffect } from 'react'
import { useState } from 'react';
import FormMascotas from '../../components/mascotas/formMascotas/formMascotas'
import {  singleMascota } from '../../services/mascotasService';
import { useParams } from 'react-router-dom';
const FormularioMascotas = () => {
    let { id_mascota } = useParams();
    const [mascota,setMascota]=useState(null);

    useEffect(() => {
        if (id_mascota) {
            singleMascota(id_mascota).then(result => {
                setMascota(result)
            })
        }
    }, [])
    
    return (
        <FormMascotas mascota={mascota} />
    )
}

export default FormularioMascotas
