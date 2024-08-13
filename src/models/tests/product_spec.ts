import { Product, ProductStore } from '../product';

const store = new ProductStore()

describe("Product Model", () => {
  it('should have an index method', () => {
    expect(store.search).toBeDefined();
  });

  it('search method should return the correct Product', async () => {
    const result = await store.search("T-shirt", 10, 20, "Fahsion");
    expect(result).toEqual([{
      id: 1,
      name: "Red T-shirt",
      price: 15,
      category: "Fashion"
    }]);
  });


});