/**
 * Lógica de negocio para el microservicio catalogo
 * @author Diego Fernando Barreto Pirateque <oclusiva9204@gmail.com>
 */

import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()


export const getProductInventory = async (req:Request, res:Response) =>{

    const {idProduct} = req.params
    let myProduct= parseInt(idProduct)

    // Verificar que idProduct sea un numero

    if(isNaN(myProduct)){
        res.status(400)
        res.json({error: 'err'})

    }

    // const idProduct = req.params.idProduct

    try{
        const ProductInventory= await prisma.product.findUnique(
            {
                where:{
                    id:myProduct
                }
            }
        )
        res.json(ProductInventory)
    }catch(error){
        console.error("Ocurrio un error", error)
        res.status(503)
        res.json({error:'Service Unavailable'})
    }
  
}
