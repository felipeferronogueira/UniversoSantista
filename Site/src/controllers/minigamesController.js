var minigameModel = require("../models/minigamesModel");

function inserirPontuacao(req, res) {
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
        minigameModel.inserirPontuacao(pontuacao, erros, fkUsuario, fkMinigame)
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

function listarPontuacoes(req, res) {
    const { idUsuario, idMinigame } = req.params;

    minigameModel.listarPontuacoes(idUsuario, idMinigame)
        .then(result => res.json(result))
        .catch(erro => {
            console.error("Erro ao buscar pontuações:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function jogadoresFavoritos(req, res) {
    minigameModel.jogadoresFavoritos()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log("Erro ao buscar jogadores favoritos:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function ranking(req, res) {
    const idMinigame = req.params.idMinigame;
    minigameModel.rankingMinigame(idMinigame)
        .then(result => res.json(result))
        .catch(erro => {
            console.error("Erro ao buscar ranking:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarGeral(req, res) {
    const idMinigame = req.params.idMinigame;

    minigameModel.buscarGeral(idMinigame)
        .then(result => res.json(result))
        .catch(erro => {
            console.error("Erro ao buscar pontuações:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarMedia(req, res) {
    const idMinigame = req.params.idMinigame;

    minigameModel.buscarMedia(idMinigame)
        .then(result => res.json(result))
        .catch(erro => {
            console.error("Erro ao buscar pontuações:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarJogador(req, res) {
    minigameModel.buscarJogador()
        .then(result => res.json(result))
        .catch(erro => {
            console.error("Erro ao buscar pontuações:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    inserirPontuacao,
    listarPontuacoes,
    jogadoresFavoritos,
    ranking,
    buscarGeral,
    buscarMedia,
    buscarJogador
}