export default class Productor {

   constructor(name, description, price, inStock = 0) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.type = "Book";
      this.inStock = inStock;
   }

   addToStock(quantity) {
      this.inStock += quantity;
   }

   removeFromStock(quantity) {
      this.inStock -= quantity;
   }

}