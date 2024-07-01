import React from 'react'
import { useState, useEffect } from 'react'
import { crearMascota, editMascota } from '../../../services/mascotasService';
import { useNavigate } from 'react-router-dom'

const FormMascotas = (props) => {
    const { mascota } = props

    console.log(props)

    const navigate = useNavigate();
    const [nom_mascota, setNommascota] = useState('');
    const [especie, setEspecie] = useState('');
    const [raza, setRaza] = useState('');
    const [id_cliente, setIdcliente] = useState(0);
    const [fechaNacimiento, setFechaNacimiento] = useState()

    const submitMascota = async () => {
        let result = null;
        if (mascota) {
            result = editMascota(mascota.id_mascota, nom_mascota, especie, raza, fechaNacimiento,id_cliente);
        } else {
            result = crearMascota(nom_mascota, especie, raza, fechaNacimiento, id_cliente);
        }
        if (result) {
            alert("Paciente enviado exitosamente")
            navigate('/mascotas')
        }
    }
    useEffect(() => {
        if (mascota) {
            setNommascota(mascota.nom_mascota)
            setEspecie(mascota.especie)
            setRaza(mascota.raza)
            setIdcliente(mascota.id_cliente)
            setFechaNacimiento(mascota.fecha_nacimiento)
        }

    }, [mascota])


    return (
        <>
            <div className='container'>
                <div class="form-group">
                    <label for="nomyape">Nombre del Paciente</label>
                    <input type="text" class="form-control" id="nom_mascota" placeholder="Nombre de la mascota" value={nom_mascota} onChange={(e) => {
                        setNommascota(e.target.value);
                    }} />
                </div>
                <div class="form-group">
                    <label for="especie">Especie</label>
                    <input type="text" class="form-control" id="especie" placeholder="especie " value={especie} onChange={(e) => {
                        setEspecie(e.target.value);
                    }} />
                </div>
                <div class="form-group">
                    <label for="Raza">Raza</label>
                    <input type="text" class="form-control" id="Raza" placeholder="Raza" value={raza} onChange={(e) => {
                        setRaza(e.target.value);
                    }} />
                </div>

                <div className='form-group'>
                    <label for="Fecha_nacimiento">Fecha de Nacimiento </label>
                    <input className='m-3' type="date" id="start" name="trip-start" value={fechaNacimiento} onChange={(e)=>{setFechaNacimiento(e.target.value)}}/>
                </div>
                <div class="form-group">
                    <label for="id_cliente">ID DEL CLIENTE ASOCIADO</label>
                    <input type="number" class="form-control" id="id_cliente" placeholder="id del cliente asociado" value={id_cliente} onChange={(e) => {
                        setIdcliente(e.target.value);
                    }} />
                </div>

                <button type="submit" class="btn btn-primary" onClick={submitMascota}>{mascota ? 'Editar Mascota' : 'Agregar Mascota'}</button>
            </div>
        </>
    )
}

export default FormMascotas
