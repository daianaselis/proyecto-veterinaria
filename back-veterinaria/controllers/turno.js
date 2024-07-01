const { response } = require("express")
const { connection } = require("../config/veterinaria_DB")

const allTurnos = (request, response) => {
    const query = `SELECT * FROM turno`

    connection.query(query, (error, data, fields) => {
        if (error) {
            console.log(error)
            response.sendStatus(400)
        }
        else {
            response.send(data)
        }

    })
}
const singleTurno = () => {
  
}
const createTurno = (request, response) => {
    const { fecha,hora,id_cliente,id_usuario,tipo_turno} = request.body
    const query = `INSERT INTO turnos (fecha,hora,id_cliente,id_usuario,tipo_turno) VALUES('${fecha}','${hora}',${id_cliente},${id_usuario},'${tipo_turno}')`
    console.log(query)
    connection.query(query, (error, results) => {
        if (error) throw error;
        response.send(results);
    })
}
const editTurno = (request, response) => {
const id_turno= request.params.id_turno
const { nom_ap, direccion, email, telefono } = request.body
const query = `UPDATE clientes SET nom_ap = '${nom_ap}', direccion = '${direccion}', email = '${email}', telefono = '${telefono}' WHERE id_cliente = '${id_cliente}'`;
connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}


const eraseTurno = (request, response) => {
const id_turno=request.params.id_cliente
const query =`DELETE FROM turnos WHERE id_turno =${id_turno}`
connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}

module.exports = {allTurnos,singleTurno,createTurno,editTurno,eraseTurno}