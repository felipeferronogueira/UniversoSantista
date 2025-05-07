var database = require("../database/config")

function pontuacaoEscalacao2011(pontuacao, erros, fkUsuario, fkMinigame) {

    var instrucaoSql = `
        INSERT INTO pontuacao (pontuacao, erros, fkUsuario, fkMinigame) VALUES ('${pontuacao}', '${erros}', '${fkUsuario}', '${fkMinigame}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pontuacaoEscalacao2011
}; 