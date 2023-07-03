import express,{Router, Request, Response} from 'express'
import { Prisma, PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'

const router : Router = Router()

router.get('/login',
(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const name= req.params.name
    const prisma:PrismaClient=new PrismaClient
    

    const payload={
       id: "user_id",
       usarname:"diego"
    }

    const options={
        expiresIn:"2h"
    }

    const secretKey = process.env.SECRET_KEY 

    if (typeof secretKey == "string"){
        const token= jwt.sign(payload, secretKey, options)
        res.json({token})
    }
})

export default router