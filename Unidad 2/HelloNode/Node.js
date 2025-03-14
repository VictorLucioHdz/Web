
const http = require('http');
const servidor = http.createServer((req, res) => { 
    res.end('PURO INGENIEROOO PATA');
});
servidor.listen(1500, () =>{
    console.log('El server ta al 100 viejo');
})


   
