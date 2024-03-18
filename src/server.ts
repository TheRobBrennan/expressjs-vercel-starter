import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import Ping from './routes/ping';

const PORT = process.env.PORT || 3000;

const server = express();

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// FUTURE: Serve static files and other assets if necessary
// server.use(express.static(path.join(__dirname, '../public')));

// Routes
server.use('/', Ping);

// Start the server
server.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

export default server;
