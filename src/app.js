//importando express
import express from "express"
import config from "./config";


import productsRoutes from './routes/productsRoutes'

const app = express();

app.set('port',config.port)

app.use(productsRoutes)

export default app;