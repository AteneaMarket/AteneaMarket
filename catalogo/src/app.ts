/**
 * Archivo principal del microservicio de catalogo
 * @author Diego Fernando Barreto <oclusiva9204@gmail.com>
 */
import express, {Application, Request, Response, NextFunction} from 'express';

import catalogoRoutes from './routes/catalogoRoutes';

import dotenv from 'dotenv'
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.conf';

dotenv.config()

const app:Application = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// ALERTA: Para toda petición 
// Deberia limitar los origines con los que puede establecer relaciones de confianza
app.use(cors());

app.use(express.json())


/**
 * 
 * Agregar al stack un conjunto de rutas
 */

app.use('/', catalogoRoutes)
app.use('/category', categoryRoutes)
/**
 * Respuesta cuando la ruta no existe
 * http status code
 */
app.use(
    (req:Request, res:Response, next:NextFunction)=>{

        res.status(404)
        res.json({message:"Upss. El recurso no existe"})
    }
)
/**
 * Respuesta cuando existe un error del servidor
 * 
 */

app.use(
    (error:Error, req:Request, res:Response, next:NextFunction)=>{
        
        res.status(500)
        console.log(error)
        res.json({message:"Houston tenemos problemas"})
    }
)

export default app;