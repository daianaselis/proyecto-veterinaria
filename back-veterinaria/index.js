const express = require("express")
const cors = require('cors')
const loginRouter=require('./routes/login')
const clientesRouter=require('./routes/clientes')
const mascotasRouter=require('./routes/mascotas')
const turnosRouter=require('./routes/turno')
const productosRouter=require('./routes/productos')
const historialmedicoRouter=require('./routes/historial_medico')

const app = express();

app.use(cors())
app.use(express.json()) 

app.use(loginRouter)
app.use(clientesRouter)
app.use(mascotasRouter )
app.use(turnosRouter)
app.use(productosRouter)
//app.use(historialmedicoRouter)

const port = 3000;

app.listen(port,()=>{
    console.log("Escuchando en el puerto "+port);
});
