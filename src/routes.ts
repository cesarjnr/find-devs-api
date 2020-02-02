import { Router } from 'express';

import DevController from './app/controllers/DevController';
// const SearchController = require('./app/controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

// routes.get('/search', SearchController.index);

export default routes;
