//creamos una variable 
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
 //http://localhost:3000
app.get('/',(req, res)=>{
    res.send('Hola mundo, aprenderás express');
}); 
app.get('/welcome',(req, res)=>{
    return res.send('Bienvenido a mi api REST');
}); 
app.get('/response/links', (req, res) => {
    res.redirect('https://geekshubsacademy.com/');
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
app.listen(port, () => console.log('La conexión se ha realizado correctamente en el puerto',port));