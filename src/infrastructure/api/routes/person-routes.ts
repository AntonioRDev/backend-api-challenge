import express from 'express';
import { makePersonController } from '../../ioc/factories/controllers/person-controller-factory';

const PersonRoutes = express.Router();
const PersonController = makePersonController();

// GET
PersonRoutes.get('/', PersonController.getAll);

// POST
PersonRoutes.post('/', PersonController.create);

export default PersonRoutes;