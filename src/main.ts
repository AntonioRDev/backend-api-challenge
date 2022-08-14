import 'reflect-metadata';
import PersonRoutes from './infrastructure/api/routes/person-routes';
import express from 'express';

const server = express();
const PORT = 3333;

server.use(express.json());

server.use('/persons', PersonRoutes);

server.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`)});