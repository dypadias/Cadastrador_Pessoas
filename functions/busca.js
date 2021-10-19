module.exports = (pessoas, trecho) => {
    return pessoas.filter(p => p.nome.includes(trecho));
};