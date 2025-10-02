import filmes from '../models/filmes.js'; 
import series from '../models/series.js'; 

export const getHome = (req, res) => {
    res.render('home', {
        titulo: 'Bem-vindo ao Catálogo Web',
        subtitulo: 'Navegue pelas rotas no menu acima.'
    });
};

export const getFilmes = (req, res) => {
    res.render('filmes', {

        itens: filmes,
        tituloPagina: 'Catálogo de Filmes',
        tipo: 'filme' 
    });
};

export const getSeries = (req, res) => {
    res.render('series', {

        itens: series,
        tituloPagina: 'Catálogo de Séries',
        tipo: 'série'
    });
};

export const getContato = (req, res) => {
    res.render('contato', {
        tituloPagina: 'Contato',
        mensagem: 'Entre em contato ou envie sugestões para este catálogo!'
    });
};