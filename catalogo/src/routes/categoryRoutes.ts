import express, {Router} from 'express';
import { getCategories } from '../controllers/category/retrieveCategoriesControllers';
import { responseToValidation,validateTotalItems } from "../validators/category/retrieveCategoriesValidator"

//Crear una instancia de la clase Router
const myRouter: Router = Router()

//Definir la ruta donde voy a obtener JSO de listado de categories

myRouter.get('/:totalItems', validateTotalItems,responseToValidation, getCategories)

export default myRouter 