/**
 * Lógica de negocio para el inventario de productos en el microservicio catalogo
 * @author Diego Fernando Barreto Pirateque <oclusiva9204@gmail.com>
 * @param req
 * @param res
 */

import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getProductsList = async (req: Request, res: Response) => {
  try {
    const { itemsPerPage } = req.params;
    let numItems = parseInt(itemsPerPage);

    const { idPage } = req.params;
    let myPage = parseInt(idPage);

    // TO DO : Verificar que los datos estén en un dominio definido

    if (isNaN(numItems) || isNaN(myPage)) {
      res.status(400);
      res.json({ error: "Bad Request" });
      console.log(numItems, myPage);
      return;
    }

    //Obtener una lista de productos con paginación
    const productsList = await prisma.product.findMany({
      skip: (myPage - 1) * numItems,
      take: numItems,
    });
    res.json(productsList);
    res.end();
  } catch (error) {
    console.error("Ocurrió un error", error);
    res.status(503);
    res.json({ error: "Service Unavailable" });
    res.end();
  }
};
