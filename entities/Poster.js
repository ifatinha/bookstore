import Productor from "./Productor.js";

export default class Poster extends Productor {

   constructor(cod, height, width, name, description, price, inStock = 0) {
      super(name, description, price, "Poster", inStock);
      this.cod = cod;
      this.height = height;
      this.width = width;
   }

}