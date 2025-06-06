var database = require("../database/config")

function inserirPontuacao(pontuacao, erros, fkUsuario, fkMinigame) {

    var instrucaoSql = `
        INSERT INTO pontuacao (pontuacao, erros, fkUsuario, fkMinigame) VALUES ('${pontuacao}', '${erros}', '${fkUsuario}', '${fkMinigame}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPontuacoes(idUsuario, idMinigame) {
    const instrucaoSql = `
        SELECT idPontuacao, pontuacao, erros
        FROM pontuacao
        WHERE fkUsuario = ${idUsuario} AND fkMinigame = ${idMinigame}
        ORDER BY idPontuacao;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function jogadoresFavoritos() {
    const instrucaoSql = `
        SELECT jf.nome AS jogador, COUNT(u.idUsuario) AS total
        FROM usuario u
        JOIN jogadorFavorito jf ON u.fkJogador = jf.idJogador
        GROUP BY jf.nome
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingMinigame(idMinigame) {
    const instrucaoSql = `
        SELECT DISTINCT(u.nome), p.pontuacao, p.erros
        FROM pontuacao p
        JOIN usuario u ON p.fkUsuario = u.idUsuario
        WHERE p.fkMinigame = ${idMinigame}
        ORDER BY p.pontuacao DESC, p.erros ASC
        LIMIT 3;
    `;
    return database.executar(instrucaoSql);
}

function buscarGeral(idMinigame) {
    const instrucaoSql = `
        SELECT u.nome as nome, MAX(p.pontuacao) as pontuacaoGeral
        FROM pontuacao p
        JOIN usuario u ON p.fkUsuario = u.idUsuario
        WHERE p.fkMinigame = ${idMinigame}
        GROUP BY u.nome;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedia(idMinigame) {
    const instrucaoSql = `
        SELECT ROUND(AVG(pontuacao),1) AS mediaGeral
        FROM pontuacao
        WHERE fkMinigame = ${idMinigame};
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarJogador() {
    const instrucaoSql = `
        SELECT 
            jf.nome AS jogador, 
            COUNT(u.idUsuario) AS total
        FROM 
            usuario u
        JOIN jogadorFavorito jf ON u.fkJogador = jf.idJogador
        GROUP BY jf.nome
        ORDER BY total DESC
        LIMIT 1;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirPontuacao,
    listarPontuacoes,
    jogadoresFavoritos,
    rankingMinigame,
    buscarGeral,
    buscarMedia,
    buscarJogador
};
