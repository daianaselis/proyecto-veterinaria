const { response } = require("express")
const { connection } = require("../config/veterinaria_DB")

const allProductos = (request, response) => {
    const query = `SELECT * FROM productos`

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
const singleProducto = (request,response) => {
    const id_producto=request.params.id_cliente
    const query = `SELECT * FROM clientes WHERE id_producto='${id_producto}' `
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
const createProducto = (request, response) => {
    const {categoria_producto,stock_producto,precio_producto,descripcion } = request.body
    const query = `INSERT INTO productos (categoria_producto,stock_producto,precio_producto,descripcion) VALUES('${categoria_producto}','${stock_producto}','${precio_producto}','${descripcion}')`
    console.log(query)
    connection.query(query, (error, results) => {
        if (error) throw error;
        response.send(results);
    })
}
const editProducto = (request, response) => {
const id_producto= request.params.id_producto 
const { categoria_producto,stock_producto,precio_producto,descripcion} = request.body
const query = `UPDATE productos SET categoria_producto = '${categoria_producto}', stock_producto = ${stock_producto}, precio_producto= '${precio_producto}', descripcion = '${descripcion}' WHERE id_cliente = '${id_producto}'`;
connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}


const eraseProducto = (request, response) => {
const id_producto=request.params.id_producto
const query =`DELETE FROM productos WHERE id_producto =${id_producto}`
connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}

module.exports = { allProductos, singleProducto, createProducto, editProducto, eraseProducto }