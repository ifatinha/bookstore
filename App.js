import Database from "./data/Database.js";
import Author from "./entities/Author.js";
import Book from "./entities/Book.js";
import Client from "./entities/Client.js";
import Order from "./entities/Order.js";
import Poster from "./entities/Poster.js";

export default class App {
   static #database = new Database();

   createAuthor(cod, name, nationatity, bio) {
      const author = new Author(cod, name, nationatity, bio);
      App.#database.saveAuthor(author);
   }

   getAuthors() {
      App.#database.find("authors");
   }

   createrClient(name, email, password) {
      const client = new Client(name, email, password);
      App.#database.saveClient(client)
   }

   getClients() {
      App.#database.find("clients");
   }

   createBook(ISBM, title, synopis, genre, pages, author, description, price) {
      const book = new Book(ISBM, title, synopis, genre, pages, author, description, price);
      App.#database.saveBook(book);
   }

   getBooks() {
      App.#database.find("books");
   }

   createPoster(cod, height, width, name, description, price) {
      const poster = new Poster(cod, height, width, name, description, price);
      App.#database.savePoster(poster);
   }

   getPosters() {
      App.#database.find("posters");
   }

   createOrder(cod, items, client) {
      const order = new Order(cod, items, client);
      App.#database.saveOrder(order);
   }

   getOrder() {
      App.#database.find("orders");
   }
}

createAuthor(1, 'Gabriel Garcia Marquez', 'Colombiano', 'Autor premiado Nobel.');
createAuthor(2, 'Haruki Murakami', 'Japonês', 'Famoso escritor Japones.');
createAuthor(3, 'Chinua Achebe', 'Nigeriano', 'Escritor renomado Nigeriano.');
createAuthor(4, 'J.K. Rowling', 'Britânica', 'Criadora de Harry Potter.');
createAuthor(5, 'Isabel Allende', 'Chilena', 'Autora de best-sellers.');
createAuthor(6, 'Jorge Luis Borges', 'Argentino', 'Poeta e contista argentino.');

createrClient('Ana Silva', 'ana.silva@example.com', 'SenhaSegura123');
createrClient('Bruno Costa', 'bruno.costa@example.com', 'BrunoPass2024');
createrClient('Carla Souza', 'carla.souza@example.com', 'Carla12345');
createrClient('Daniel Rocha', 'daniel.rocha@example.com', 'Daniel!@#');
createrClient('Elena Marques', 'elena.marques@example.com', 'ElenaPass123');