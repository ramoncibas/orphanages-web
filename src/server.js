//import dependencies
const express = require('express');
const path = require('path');
const page = require('./pages.js');

//starting express
const server = express();

server
    //use req body
    .use(express.urlencoded({ extended: true }))

    //using static files
    .use(express.static('public'))
    
    //configure the template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //application routes
    .get('/', page.index)
    .get('/orphanage', page.orphanage)
    .get('/orphanages', page.orphanages)
    .get('/create-orphanage', page.createOrphanage)
    .post('/save-orphanage', page.saveOrphanage)

//turn on the server
server.listen(5500)