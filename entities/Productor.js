export default class Productor {

   constructor(name, description, price, type, inStock = 0) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.type = type;
      this.inStock = inStock;
   }

   addToStock(quantity) {
      this.inStock += quantity;
   }

   removeFromStock(quantity) {
      this.inStock -= quantity;
   }

}