const express = require("express")
const router = express.Router()
const {allClientes,singleCliente,createCliente,editClient,eraseClient} = require("../controllers/clientes");
//aqui van mis peticiones http

router.get("/clientes/",allClientes)
router.get("/clientes/:id_cliente",singleCliente)
router.post("/clientes/crearCliente",createCliente)
router.put("/clientes/editarCliente/:id_cliente",editClient)
router.delete("/clientes/eliminarCliente/:id_cliente",eraseClient)
module.exports= router 
 