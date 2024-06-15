import Database from "../data/Database.js";
import Author from "../entities/Author.js";
import Book from "../entities/Book.js";
import Client from "../entities/Client.js";
import Order from "../entities/Order.js";
import Poster from "../entities/Poster.js";

export default class App {
   static #database = new Database();

   createAuthor(cod, name, nationatity, bio) {
      const author = new Author(cod, name, nationatity, bio);
      App.#database.saveAuthor(author);
   }

   getAuthors() {
      return App.#database.find("authors");
   }

   createrClient(name, email, password) {
      const client = new Client(name, email, password);
      App.#database.saveClient(client)
   }

   getClients() {
      return App.#database.find("clients");
   }

   createBook(ISBM, title, synopis, genre, pages, author, description, price, inStock) {
      const book = new Book(ISBM, title, synopis, genre, pages, author, description, price, inStock);
      App.#database.saveBook(book);
   }

   addBook(ISBM, quantity) {
      App.#database.addBookInStock(ISBM, quantity);
   }

   removeBook(ISBM, quantity) {
      App.#database.removeBooksFromStock(ISBM, quantity);
   }

   getBooks() {
      return App.#database.find("books");
   }

   createPoster(cod, height, width, name, description, price, inStock) {
      const poster = new Poster(cod, height, width, name, description, price, inStock);
      App.#database.savePoster(poster);
   }

   addPoster(cod, quantity) {
      App.#database.addPosterInStock(cod, quantity);
   }

   removePoster(cod, quantity) {
      App.#database.removePostersFromStock(cod, quantity);
   }

   getPosters() {
      return App.#database.find("posters");
   }

   createOrder(cod, items, client) {
      if (items) {
         const order = new Order(cod, items, client);
         App.#database.saveOrder(order);
         order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
               App.#database.removeBooksFromStock(product.ISBM, quantity)
            } else if (product instanceof Poster) {
               App.#database.removePostersFromStock(product.cod, quantity)
            }
         })
      }
   }

   getOrder() {
      return App.#database.find("orders");
   }

   showDatabase() {
      App.#database.showStorage();
   }
}