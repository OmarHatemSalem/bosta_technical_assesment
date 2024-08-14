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

    let sql = `SELECT products.name, products.price, suppliers.name AS supplier FROM products
               JOIN suppliers
               ON products.supplier_id = suppliers.id `
                

    let conds:string[] = []
    let params:any[] = []
    
    let i:number = 1 
    if (lowerPrice != -1) {conds.push(`products.price >= $${i}`); i++; params.push(lowerPrice);}
    if (upperPrice != -1) {conds.push(`products.price <= $${i}`); i++; params.push(upperPrice);}
    if (category != "") {conds.push(`products.category= $${i}`); i++; params.push(category);}
    if (name != "") {conds.push(`LOWER(products.name) LIKE '%' || $${i} || '%'`); i++; params.push(name.toLowerCase());}

    if (conds.length > 0) sql += ' WHERE '
    
    sql += conds.join(' AND ')

    sql += ` ORDER BY products.units_sold DESC;`
    
      // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, params)

    conn.release()

    return result.rows
    } catch (err) {
        throw new Error(`Could not find any product. Error: ${err}`)
    }
  }

  
}