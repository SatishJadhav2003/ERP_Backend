const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Enable CORS and allow specific headers
server.use(cors({
  origin: 'http://localhost:4200', // Your Angular app's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
