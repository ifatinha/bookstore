import Productor from "./Productor.js";

export default class Book extends Productor {

   constructor(ISBM, title, synopis, genre, pages, author, description, price, type, inStock = 0) {
      super(`Livro: ${title}`, description, price, type, inStock);
      this.ISBM = ISBM;
      this.title = title;
      thisl.synopis = synopis;
      this.genre = genre;
      this.pages = pages;
      this.author = author;
   }

}