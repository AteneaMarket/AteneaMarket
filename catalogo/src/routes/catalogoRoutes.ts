import express,{Router} from 'express'

import {getProductInventory } from '../controllers/catalogoControllers'
import { getProductsList } from '../controllers/ListaProductosControllers'

/**
 * Rutas del microservicio Carrito de Compras
 * 
 * @author Diego Fernando Barreto Pirateque
 */

const myRouter:Router = Router()

myRouter.get('/:idProduct', getProductInventory) 
myRouter.get('/page/:idPage/items/:itemsPerPage', getProductsList)



export default myRouter