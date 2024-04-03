import {UserController} from './Controllers/UserController'
import {CostsController} from "./Controllers/CostsController";
import {Router} from 'express'

const routes = Router();
const User = new UserController();
const Costs = new CostsController();


// User routes
routes.get('/user', User.create)
routes.put('/user/:username', User.update)
routes.delete('/user/:username', User.delete)
routes.get('/users', User.get)
routes.post('/login', User.login)

// Costs routes
routes.get('/costs', Costs.get)
routes.post('/costs', Costs.create)
routes.put('/costs/:_id', Costs.update)
routes.delete('/costs/:_id', Costs.delete)
