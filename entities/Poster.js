import Productor from "./Productor.js";

export default class Poster extends Productor {

   constructor(height, width, name, description, price, inStock = 0) {
      super(name, description, price, "Poster", inStock);
      this.height = height;
      this.width = width;
   }

}