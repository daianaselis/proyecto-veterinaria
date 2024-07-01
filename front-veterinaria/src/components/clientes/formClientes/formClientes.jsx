import React from 'react'
import { useState ,useEffect} from 'react'
import { crearCliente, editCliente } from '../../../services/clienteService';
import { useNavigate } from 'react-router-dom' 

const FormClientes = (props) => {
    const { cliente } = props;

    const navigate=useNavigate();
    const [nomyape,setNomyape]=useState('');
    const [direccion,setDireccion]=useState('');
    const [telefono,setTelefono]=useState('');
    const [email,setEmail]=useState('');
    
    const submitCliente=async ()=>{
        let result = null;
        if(cliente){
            result = editCliente(cliente.id_cliente, nomyape,direccion,telefono,email);
        }else{
            result = crearCliente(nomyape,direccion,telefono,email);
        }
        if(result){
            alert("Cliente enviado exitosamente")
            navigate('/clientes')
        }
    }
    useEffect (()=>{
        if(cliente){
            setNomyape(cliente.nom_ap)
            setDireccion(cliente.direccion)
            setEmail(cliente.email)
            setTelefono(cliente.telefono)
        }
        
    },[cliente])

    return (
        <div className='container'>
            <div class="form-group">
                <label for="nomyape">Nombre y Apellido</label>
                <input type="text" class="form-control" id="nomyape" placeholder="Nombre" value={nomyape} onChange={(e) => {
                    setNomyape(e.target.value);
                }} />
            </div>
            <div class="form-group">
                <label for="direccion">direccion</label>
                <input type="text" class="form-control" id="direccion" placeholder="direccion" value={direccion} onChange={(e) => {
                    setDireccion(e.target.value);
                }} />
            </div>
            <div class="form-group">
                <label for="telfono">telefono</label>
                <input type="tel" class="form-control" id="telefono" placeholder="telefono" value={telefono} onChange={(e) => {
                    setTelefono(e.target.value);
                }} />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }} />
            </div>

            <button type="submit" class="btn btn-primary" onClick={submitCliente}>{cliente?'Editar Cliente':'Agregar Cliente'}</button>
        </div>
    )
}

export default FormClientes
