//creamos una variable 
//const { request, response } = require('express');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
//const req = require('express/lib/request');
const app = express();//ejecutando
const port = 3000;
//requerimiento "req" por el usuario y la respuesta "res" de nosotros
app.use(express.json());
//--> Routing a partir de aquí
 //http://localhost:3000
app.get('/',(req, res)=>{
    res.send('Hola mundo, aprenderás express');
}); 
//http://localhost:3000/welcome
app.get('/welcome',(req, res)=>{
    return res.send('Bienvenido a mi api REST');
}); 
//Practicamos
app.get('/response/links', (req, res) => {
    res.redirect('https://geekshubsacademy.com/'); //redirecciona cualquier ruta
});
app.get('/response/json', (req, res) =>
{
        res.json({
        user: 'Isaac',
        surnanme: 'Prueba',
        age: '23',
        country: 'Spain'
    })
});
//http://localhost:3000/request/usuario/Isaac_Valqui
app.get('/request/usuario/:nombre', function (req,res){
    return res.send("Mi nombre es "+ req.params.nombre)
})
//http://localhost:3000/request/pais?pais=Peru
app.get('request/pais',function (req,res){
    return res.send("Mi país natal es "+ req.query.pais)
})
//http://localhost:3000/movies
app.get('/movies',(req, res)=>{
    return res.send('Recuperando todas las peliculas');
});
//http://localhost:3000/peliculas
app.get('/peliculas',(req, res)=>{
    return res.json(movies);
});
//---ALT+92='\\'
let movies = [
    {id: 1, titulo:'los avengers'},
    {id: 2, titulo:'destino final'},
    {id: 3, titulo:'Peleador ᕦ( ͡͡~͜ʖ ͡° )ᕤ'},
    {id: 4, titulo:'A todo gas'},
    {id: 5, titulo:'los peligrosos'},
    {id: 6, titulo:'desencadenado'}
]
app.post('/postmovies',(req, res)=>{
    /*console.log('--------------------')
    console.log(req.body);
    console.log('--------------------')*/
    const name = req.body.name
    const autor = req.body.autor
    const year = req.body.year
    return res.send('La pelicula que registro en la BD se llama '+ name +' y su director es '+ autor);
})
app.post('/movies',(req,res)=>{
    const {id , titulo} = req.body; //mandamos al json al postman
    const movie =  {id , titulo}
    movies.push(movie);
    res.json(movie)
})
app.put('/putmovies/:id',(req,res)=>{//->":id" variable que introducimos en la ruta
    const movieid = req.params.id;
    return res.send('Actualizar pelicula con id: '+ movieid);
})
app.put('/movies/:id', (req , res)=>{
    const { id } = req.params;
    const { titulo } = req.body;//json
    let movieList = movies.filter(movie => movie.id != id);//filtrame todas las pelis que sean diferentes al id
    let movie = {id, titulo}
    movieList.push(movie)
    movies = movieList;  
    res.json(movie)
})
app.delete('/movie/:id',(req, res)=>{
    const { id } = req.params;
    let movieList = movies.filter(movie => movie.id != id)
    movies = movieList; 
    res.json('OK')
})
//http://localhost:3000/movies/""
app.get('/movie/:id', (req,res)=>{
    let {id} = req.params
    let movie = movies.find(item => item.id === Number(id) )
    return res.json(movie);//return res.json(`${id}`);
})
//http://localhost:3000/Movie?q=''
app.get('/Movie', (req,res)=>{
    let {q} = req.query //esto permite escribir una palabra para obtener resultados
    let movieList = movies.filter(item => item.titulo.includes(q))//filtrar los titulos de pelis
    return res.json(movieList); 
})
//http://localhost:3000/google
app.get('/google', (req, res)=>{
    return res.redirect('http://google.com'); 
});
//eliminas las comillas para poner la ruta en tu navegador
//http://localhost:3000/secreta/"cualquier palabra"
app.get('/secreta/:palabra', (req, res)=>{
    return res.send(`la palabra secreta es ${req.params.palabra}`); //acento grave ALT+96=``
});
//http://localhost:3000/secreto?palabra="cualquier palabra"
app.get('/secreto', (req, res)=>{
    return res.send(`la palabra secreto es ${req.query.palabra}`);
});
app.listen(port, () => 
console.log('La conexión se ha realizado correctamente en el puerto ',port));
//('Servidor ejecutado puerto'+ port)

