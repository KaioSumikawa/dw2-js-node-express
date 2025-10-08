// atv1-sistema-web/app.js
import express from 'express';
import { engine } from 'express-handlebars';
import rotas from './routes/index.js'; // Importa as rotas

const app = express();
const PORT = 3000;

// Configuração do Handlebars
app.engine('.hbs', engine({
    extname: '.hbs', 
    defaultLayout: 'main', // Layout principal em views/layouts/main.hbs
    partialsDir: ['views/partials/'], // Pasta dos parciais
}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Configura o middleware para servir arquivos estáticos (CSS, Imagens)
// O conteúdo de 'public' será acessível diretamente (ex: /css/style.css)
app.use(express.static('public')); 

// Middleware para usar as rotas definidas
app.use('/', rotas);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});