export default class Database {
   #storage = {
      authors: [],
      books: [],
      posters: [],
      clients: [],
      orders: []
   }

   find(key) {
      return this.#storage[key];
   }

   saveAuthor(author) {
      let authorExist = this.#storage.authors.find((a) => a.cod === author.cod);

      if (!authorExist) {
         this.#storage.authors.push(author);
      }
   }

   findBookByISBM(ISBM) {
      return this.#storage.books.find((b) => {
         return b.ISBM === ISBM
      })
   }

   saveBook(book) {
      let bookExist = this.findBookByISBM(book.ISBM);

      if (!bookExist) {
         this.#storage.books.push(book);
      }
   }

   addBookInStock(ISBM, quantity) {
      const book = this.findBookByISBM(ISBM);
      book?.addToStock(quantity);
   }

   removeBooksFromStock(ISBM, quantity) {
      const book = this.findBookByISBM(ISBM);
      if (quantity <= book.inStock) {
         book.removeFromStock(quantity);
      }
   }

   findPosterByCod(cod) {
      return this.#storage.posters.find((p) => {
         return p.cod === cod;
      })
   }

   savePoster(poster) {
      let posterExist = this.findPosterByCod(poster.cod);

      if (!posterExist) {
         this.#storage.posters.push(poster);
      }

   }

   addPosterInStock(cod, quantity) {
      const poster = this.findPosterByCod(cod);
      poster?.addToStock(quantity);
   }

   removePostersFromStock(cod, quantity) {
      const poster = this.findPosterByCod(cod);

      if (quantity <= poster.inStock) {
         poster.removeFromStock(quantity);
      }
   }

   saveClient(client) {
      let clientExist = this.#storage.clients.find((c) => {
         return c.email === client.email;
      })

      if (!clientExist) {
         this.#storage.clients.push(client);
      }

   }

   saveOrder(order) {
      this.#storage.orders.push(order);
   }

   showStorage() {
      console.table(this.#storage.authors);
      console.table(this.#storage.books);
      console.table(this.#storage.posters);
      console.table(this.#storage.clients);
      console.table(this.#storage.orders.map((order) => order.data));
   }
}

