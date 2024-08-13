import Client from "../database";

export type Product = {
    id?: number;
    name: string;
    price: number;
    category: string;
}

export class ProductStore {
  
  async search(name: string, lowerPrice: number, upperPrice: number, category: string): Promise<Product[]> {
    try {
    const sql = `SELECT products.name, products.price, suppliers.name AS supplier
                 FROM products JOIN suppliers ON products.supplier_id = suppliers.id 
                 WHERE products.price >= $1 
                 AND products.price <= $2 
                 AND products.category=$3 
                 AND LOWER(products.name) LIKE '%' || $4 || '%'
                 ORDER BY products.units_sold DESC;`
      // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [lowerPrice, upperPrice, category, name.toLowerCase()])

    conn.release()

    return result.rows
    } catch (err) {
        throw new Error(`Could not find any product. Error: ${err}`)
    }
  }

  
}