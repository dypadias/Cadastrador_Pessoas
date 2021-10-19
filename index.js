let pessoasDb = require('./database/pessoas.json');
let show = require('./functions/show');
let busca = require('./functions/busca');

let pessoasBuscadas = busca(pessoasDb, "o");

show(pessoasBuscadas)