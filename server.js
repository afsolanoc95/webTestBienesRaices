//reemplaza el app.js debido a que aca probaremos express y no http directamente
const express = require('express');
const app = express();
const hbs = require('hbs');


// para un html normal con la url /

app.use(express.static(__dirname+`/public`));


//only hbs para no repetir etiquetas html que normalmente se repiten
hbs.registerPartials(__dirname + '/views/partials');
//

//express hbs
//hbs en handlebars que es para colocarle doble parantesis al html y que lo lea desde express
app.set('view engine', 'hbs');
//

/**
  ayuda a utilizar una variable de los templates cuando se requiera
funcion que se dispara cuando el template lo requiere
 */

require(`./helpers/helpers`);
//




/*
app.get('/', (req, res)=> {

 let salida={
    nombre: `anderson`,
    edad: 25,
    url: req.url
 }
 res.send(salida);
});*/
app.get('/home', (req, res)=> {
    //res.send('Hello World')
    //para el handlebars
    res.render('home',{
        nombre: `Venta de Casas y Departamentos Exclusivos de lujo geniales`,
        //anio:new Date().getFullYear()
    });
});

app.get('/blog', (req, res)=> {
    //res.send('Hello World')
    //para el handlebars
    res.render('blog');
});
app.get('/anuncio', (req, res)=> {
    //res.send('Hello World')
    //para el handlebars
    res.render('anuncio');
});

app.get('/anuncios', (req, res)=> {
    //res.send('Hello World')
    //para el handlebars
    res.render('anuncios');
});
app.get('/contacto', (req, res)=> {
    //res.send('Hello World')
    //para el handlebars
    res.render('contacto');
});

app.get('/entrada', (req, res)=> {
    //res.send('Hello World')
    //para el handlebars
    res.render('entrada');
});
app.get('/nosotros', (req, res)=> {
    //res.send('Hello World')
    //para el handlebars
    res.render('nosotros');
});
 
//app.listen(3000)
//tambien recibe callback
app.listen(3000,()=>{
    console.log(`Escuchando peticiones en el puerto 3000`);
});