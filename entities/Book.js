import Productor from "./Productor.js";

export default class Book extends Productor {

   constructor(ISBM, title, synopis, genre, pages, author, description, price, inStock = 0) {
      super(`Livro: ${title}`, description, price, inStock);
      this.ISBM = ISBM;
      this.title = title;
      this.synopis = synopis;
      this.genre = genre;
      this.pages = pages;
      this.author = author;
   }

}