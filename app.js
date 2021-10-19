// importar o express
const express = require('express');

//criar uma aplicação em express
const app = express();

//fazer com que a aplicação express atenda a uma requisição
app.get('/', (req, res) => {
    res.send("ola");
    console.log("Deu certo....Ou não...");
})

//Criar uma rota get '/pessoas'
app.get('/pessoas', (req, res) => {
    let pessoas = require('./database/pessoas.json');
    res.send(pessoas)
}, )

//criar uma rota get '/pessoas/1' que deve retornar pessoa da posição 1

app.get('/pessoas/:id', (req, res) => {
    let pessoas = require('./database/pessoas.json');
    let id = req.params.id
    res.send(pessoas[id])
})


//Levantar a aplicação (fazer com que que a aplicação fique a disposição)
app.listen(3000, () => { console.log("Servidor rodando na porta 3000") });