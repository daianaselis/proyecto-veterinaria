const express = require("express")
const router = express.Router()
const { allProductos, singleProducto, createProducto, editProducto, eraseProducto } = require("../controllers/productos");
//aqui van mis peticiones http

router.get("/productos/",allProductos)
router.get("/productos/:id_producto",singleProducto)
router.post("/productos/crearProducto",createProducto)
router.put("/productos/editarProducto/:id_producto",editProducto)
router.delete("/productos/eliminarProducto/:id_producto",eraseProducto)
module.exports=router
