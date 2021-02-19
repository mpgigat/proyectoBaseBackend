//require('dotenv').config();
import {} from 'dotenv/config.js'
import {Server} from './models/server.js'
//const Server=require('./models/server');

const server= new Server();

server.listen();

 
