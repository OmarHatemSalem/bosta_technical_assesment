import express, { Request, Response } from 'express'
import { Product, ProductStore } from '../models/product'

const jwt = require('jsonwebtoken'); 
const store = new ProductStore()



const search = async (req: Request, res: Response) => {
   const product = await store.search(req.body.name, req.body.lowerPrice, req.body.upperPrice, req.body.category)
   res.json(product)
}

const productRoutes = (app: express.Application) => {
  app.get('/products', search)
}

export default productRoutes