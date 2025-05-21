const express = require('express');
const pool = require('./db');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
app.disable('x-powered-by');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
  res.render('login', { error: null });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.render('login', { error: 'Usuario no encontrado' });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      res.render('dashboard', { user });
    } else {
      res.render('login', { error: 'Contraseña incorrecta' });
    }
  } catch (err) {
    console.error(err);
    res.render('login', { error: 'Error en el servidor' });
  }
});

module.exports = app;
