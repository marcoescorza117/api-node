//importando express
import express from "express"
import config from "./config";


import productsRoutes from './routes/productsRoutes'

const app = express();

//settigs
app.set('port',config.port)

//midleware--- configuracion para aceptar json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(productsRoutes)

export default app;