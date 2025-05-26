const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mysql = require('mysql2');

app.use(express.json());
app.use(morgan());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

  const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'admin1234',
  database: process.env.DB_NAME || 'd21100233',
  port: process.env.DB_PORT || 3306,
 
  
  });
  app.get('/carros', (req, res) => {
   connection.query('SELECT * FROM carros', (err, results) => {
    if (err) {
      console.error('Error al obtener los carros:', err);
      return res.status(500).json({ error: 'Error al obtener los datos de carros' });
    }
    res.status(200).send("Si entro"); // 👈 Esto debe ser JSON
  });
});

app.get('/carros/:id', (req, res) => {
  const ID = req.params.id
  connection.query(
    'SELECT * FROM d21100233.carros WHERE id = ?',
    "ID",
    function (err, results) {
      res.json(results);
    }
  );
});
app.delete('/carros/:id', (req, res) => {
  const ID = req.params.id
  connection.query(
    'DELETE FROM d21100233.carros WHERE id = ?',
    [ID],

  );
  });

app.post('/carros', (req, res) => {
  const {Id, Modelo, Marca , Precio, Color} = req.body;
  connection.query(
    'INSERT INTO d21100233.carros (id, modelo, marca , precio, color) VALUES (?, ?, ?, ?, ?)',
    [Id, Modelo, Marca , Precio, Color],
    function (err, results) {
      res.json({Id, Modelo, Marca , Precio, Color});
    }
  );
});





app.put('/carros/:id', (req, res) => {
  const id = req.params.id;
  const {Modelo, Marca , Precio, Color} = req.body;
  connection.query(
    'UPDATE d21100233.carros SET modelo = ?, marca = ?, precio = ?, color = ? WHERE id = ?',
    [Modelo, Marca , Precio, Color, id],
    
)});


app.use ((req, res, next) => {
    res.status(404);
    res.send('No se encontró la ruta solicitada');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

// Intalar morgan npm install morgan
//Funciones middleware
// Tarea script de la base de datos 
