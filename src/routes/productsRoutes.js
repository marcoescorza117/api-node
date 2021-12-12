import {Router} from 'express'

import { createNewProduct, deleteProduct, getProductByID, getProducts, getTotalProducts, updateProduct } from "../controllers/productsController";

const router = Router();

//obtener todos los productos
router.get('/products',getProducts)

//crear nuevo producto
router.post('/products',createNewProduct)

//contar total productos
router.post('/products/total', getTotalProducts)

//obtener por id
router.get('/products/:id',getProductByID)

//borrar elemento
router.delete('/products/:id',deleteProduct)

//actualizar
router.put('/products/:id',updateProduct)


export default router;