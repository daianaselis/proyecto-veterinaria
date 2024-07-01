const buscarClientes = async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/clientes`)
    const data = await response.json()
    return data;
}
const crearCliente = async (nombreyapellido, direccion, telefono, email) => {
    const response = await fetch(`${process.env.BACKEND_URL}/clientes/crearCliente`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom_ap: nombreyapellido,
            direccion,
            telefono,
            email
        })
    })
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}

const borrarCliente = async (id_cliente) => {
    const response = await fetch(`${process.env.BACKEND_URL}/clientes/eliminarCliente/${id_cliente}`, {
        method: 'DELETE',
    })
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}

const singleCLiente = async(id_cliente)=>{
    const response = await fetch(`${process.env.BACKEND_URL}/clientes/${id_cliente}`)
    const data = await response.json()
    return data
}
const editCliente=async(id_cliente,nombreyapellido, direccion, telefono, email)=>{
    const response = await fetch(`${process.env.BACKEND_URL}/clientes/editarCliente/${id_cliente}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom_ap: nombreyapellido,
            direccion,
            telefono,
            email
        })
    })
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}
export { buscarClientes,singleCLiente, crearCliente ,borrarCliente,editCliente}