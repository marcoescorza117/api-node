import {Router} from 'express'

import { createNewProduct, getProducts } from "../controllers/productsController";

const router = Router();


router.get('/products',getProducts)

router.post('/products',createNewProduct)

router.get('/products',getProducts)

router.delete('/products',getProducts)

router.put('/products',getProducts)


export default router;