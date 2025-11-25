const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'static')));

// Para manejar datos de formularios POST
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index');
});

// Entrenamientos
app.get('/workouts', (req, res) => {
    res.render('workouts');
});

// Registro
app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', (req, res) => {
    const { name, email } = req.body;
    console.log(`Nuevo registro: ${name}, ${email}`);
    res.send(`
        <h1>Gracias por registrarte, ${name}!</h1>
        <a href="/">Volver al inicio</a>
    `);
});

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.post('/profile', (req, res) => {
    const { name, age, weight, height, condition } = req.body;
    console.log("Datos del usuario:", { name, age, weight, height, condition });

    res.send(`
        <h1>Gracias, ${name}</h1>
        <p>Edad: ${age}</p>
        <p>Peso: ${weight} kg</p>
        <p>Estatura: ${height} cm</p>
        <p>Condición especial: ${condition}</p>
        <a href="/">Volver al inicio</a>
    `);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
