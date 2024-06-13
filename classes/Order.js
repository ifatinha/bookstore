export default class Order {

   #cod;
   #total;
   #items;
   #client;

   constructor(cod, items, client) {
      items.forEach(({ product, quantity }) => {
         if (quantity > product.quantity) {
            throw new Error("QUantidade insuficiente em estoque.");
         }
      })

      this.#cod = cod;
      this.#items = items;
      this.#client = client;
      this.#total = items.reduce((total, { product, quantity }) => {
         return total + (product.price * quantity);
      }, 0)
   }

   get data() {
      return {
         cod: this.#cod,
         items: this.#items,
         total: this.#total,
         client: this.#client
      }
   }
}