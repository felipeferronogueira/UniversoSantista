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


module.exports = {
    inserirPontuacao,
    listarPontuacoes,
    jogadoresFavoritos
};
