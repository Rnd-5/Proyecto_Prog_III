//====================REQUIRES_Y_CONST====================//
require('./config/config');
require('./hbs/helpers');

const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

//=============================================================//

mongoose.connect('mongodb://localhost:27017/BD_Noticias_com', (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

//========================PETICIONES_GET======================//
app.get('/', (req, res) => {
    /* res.send('Hello World');
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url};*/

    res.render('parciales/noticias_inicio', {
        //name: 'fernando'
        titular: ' Titular de la noticia +__+',
        imagen: '',
        autor: 'Este tipo publicó *==*'
    });
});
/*
app.get('/about', (req, res) => {

    res.render('parciales/about');

});
*/
app.get('/vista_noticia', (req, res) => {

    res.render('parciales/vista_noticia', {
        titular: ' Titular de la noticia +__+',
        cuerpoNoticia: 'Se supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.',
        imagen: '',
        autor: 'Este tipo publicó *==*'
    });

});



/*
app.get('/data', (req, res) => {

    res.send('Hello Data');

});
*/
//=============================================================//

//========================PETICIONES_POST======================//

app.get('/publicar_noticia', function(req, res) {

    res.render('parciales/formulario_noticia');

});


//=============================================================//

//========================PETICIONES_PUT======================//

app.get('/editar_noticia', function(req, res) {

    res.render('parciales/editar_noticia');

});


//=============================================================//



app.listen(port, () => {
    console.log('Escuchando petisiones en el puerto:', port);
});