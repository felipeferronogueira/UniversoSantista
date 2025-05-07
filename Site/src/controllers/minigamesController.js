var minigameModel = require("../models/minigamesModel");

function pontuacaoEscalacao2011(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var erros = req.body.errosServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkMinigame = req.body.fkMiniGameServer;
    
    // Faça as validações dos valores
    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuacao está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Seus erros está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else if (fkMinigame == undefined) {
        res.status(400).send("Sua fkMinigame está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        minigameModel.pontuacaoEscalacao2011(pontuacao, erros, fkUsuario, fkMinigame)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio da pontuacao! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    pontuacaoEscalacao2011
}