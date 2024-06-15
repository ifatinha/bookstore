import App from "./app/App.js"

const app = new App();

app.createAuthor(1, 'Gabriel Garcia Marquez', 'Colombiano', 'Autor premiado Nobel.');
app.createAuthor(2, 'George R.R. Martin', 'Norte-americano', 'Criador de Game Of Thrones e The House of The Dragon');
app.createAuthor(3, 'Paulo Coelho', 'Brasileiro', 'Escritor renomado Brasileiro.');
app.createAuthor(4, 'Guimarães Rosa', 'Brasileiro', 'Escritor e Poeta Brasileiro.');
app.createAuthor(5, 'Machado de Assis', 'Brasileiro', 'Renomado Escritor Brasileiro.');

const authors = app.getAuthors();

app.createBook('9788578273699', 'Dom Casmurro', '...', ['Romance'], 256, authors[4], '...', 29.90, 100);
app.createBook('9788535914849', 'Grande Sertão: Veredas', '...', ['Ficção'], 624, authors[3], '...', 49.90, 100);
app.createBook('9788501042417', 'O Alquimista', '...', ['Ficção'], 208, authors[2], '...', 24.90, 100);
app.createBook('9788580411682', 'As crônicas de Gelo e Fogo', '...', ["ficção científica", "terror", "fantasia"], 592, authors[1], '...', 69.90, 100);
app.createBook('9788535902778', 'Cem Anos de Solidão', '...', ['Realismo Mágico'], 448, authors[0], '....', 39.90, 100);

const books = app.getBooks();

app.createPoster(1, 60.00, 40.00, 'Pôr do Sol', 'Um belo pôster de um pôr do sol na praia.', 29.90, 200);
app.createPoster(2, 70.00, 50.00, 'Montanhas Nevadas', 'Paisagem de montanhas cobertas de neve.', 35.50, 200);
app.createPoster(3, 80.00, 60.00, 'Floresta Encantada', 'Uma floresta mágica cheia de luzes e sombras.', 45.00, 200);
app.createPoster(4, 90.00, 70.00, 'Cidade à Noite', 'Vista aérea de uma cidade iluminada à noite.', 55.25, 200);
app.createPoster(5, 100.00, 80.00, 'Cachoeira', 'Imagem de uma cachoeira em um ambiente tropical.', 65.75, 200);

const posters = app.getPosters();

app.createrClient('Ana Silva', 'ana.silva@example.com', 'SenhaSegura123');
app.createrClient('Bruno Costa', 'bruno.costa@example.com', 'BrunoPass2024');
app.createrClient('Carla Souza', 'carla.souza@example.com', 'Carla12345');
app.createrClient('Daniel Rocha', 'daniel.rocha@example.com', 'Daniel!@#');
app.createrClient('Elena Marques', 'elena.marques@example.com', 'ElenaPass123');

const clients = app.getClients();

const items = [
   {
      product: books[0],
      quantity: 2
   },

   {
      product: books[1],
      quantity: 1
   },
   {
      product: books[2],
      quantity: 2
   }
]

app.createOrder(1, items, clients[0])
const orders = app.getOrder();

orders.forEach((order) => {
   console.log(order.data)
})

app.showDatabase();