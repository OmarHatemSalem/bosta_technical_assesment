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
    const sql = "SELECT * FROM products WHERE price >= $1 AND price <= $2 AND category=$3 AND name LIKE '%' || $4 || '%';"
      // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [lowerPrice, upperPrice, category, name])

    conn.release()

    return result.rows
    } catch (err) {
        throw new Error(`Could not find any product. Error: ${err}`)
    }
  }

  
}