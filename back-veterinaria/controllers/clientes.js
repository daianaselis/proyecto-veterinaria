const { response } = require("express")
const { connection } = require("../config/veterinaria_DB")

const allClientes = (request, response) => {
    const query = `SELECT * FROM clientes `

    connection.query(query, (error, data) => {
        if (error) {
            console.log(error)
            response.sendStatus(400)
        }
        else {
            response.send(data)
        }

    })
}

const singleCliente = (request,response) => {
    console.log(request.params)
    const id_cliente=request.params.id_cliente
    const query = `SELECT * FROM clientes WHERE id_cliente=${id_cliente}`
    console.log(query)
    connection.query(query, (error, data) => {
        if (error || data.length < 1) {
            console.log(error)
            response.sendStatus(400)
        }
        else {
            response.send(data[0])
        }

    })
}
const createCliente = (request, response) => {
    const { nom_ap, direccion, email, telefono } = request.body
    const query = `INSERT INTO clientes (nom_ap,direccion,email,telefono) VALUES('${nom_ap}','${direccion}','${email}','${telefono}')`
    console.log(query)
    connection.query(query, (error, results) => {
        if (error) throw error;
        response.send(results);
    })
}
const editClient = (request, response) => {
    const id_cliente = request.params.id_cliente 
    const { nom_ap, direccion, email, telefono } = request.body
    const query = `UPDATE clientes SET nom_ap = '${nom_ap}', direccion = '${direccion}', email = '${email}', telefono = '${telefono}' WHERE id_cliente = '${id_cliente}'`;
    connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}


const eraseClient = (request, response) => {
const id_cliente=request.params.id_cliente
const query =`DELETE FROM clientes WHERE id_cliente = ${id_cliente}`
connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}

module.exports = { allClientes, singleCliente, createCliente, editClient, eraseClient }