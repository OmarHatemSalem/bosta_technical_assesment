import express, { Request, Response } from 'express'
import { Product, ProductStore } from '../models/product'

const jwt = require('jsonwebtoken'); 
const store = new ProductStore()



const search = async (req: Request, res: Response) => {
   const name: string = ("name" in req.body) ? req.body.name : "";
   const lowerPrice: number = ("lowerPrice" in req.body) ? req.body.lowerPrice : -1;
   const upperPrice: number = ("upperPrice" in req.body) ? req.body.upperPrice : -1;
   const category: string = ("category" in req.body) ? req.body.category : "";

   const product = await store.search(name, lowerPrice, upperPrice, category)
   res.json(product)
}

const productRoutes = (app: express.Application) => {
  app.get('/products', search)
}

export default productRoutes