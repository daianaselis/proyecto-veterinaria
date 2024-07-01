const express = require("express")
const router = express.Router()
const {allTurnos,singleTurno,createTurno,editTurno,eraseTurno} = require("../controllers/turno");
//aqui van mis peticiones http

router.get("/turnos/",allTurnos)
router.get("/clientes/:id",singleTurno)
router.post("/clientes/crearCliente",createTurno)
router.put("/clientes/editarCliente/:id_cliente",editTurno)
router.delete("/clientes/eliminarCliente/:id_cliente",eraseTurno)
module.exports=router
