var express = require("express");
var router = express.Router();

var minigamesController = require("../controllers/minigamesController");

router.post("/inserirPontuacao", function (req, res) {
    minigamesController.inserirPontuacao(req, res);
})

router.get("/pontuacoes/:idUsuario/:idMinigame", function (req, res) {
    minigamesController.listarPontuacoes(req, res);
});

router.get("/jogadores-favoritos", function (req, res) {
    minigamesController.jogadoresFavoritos(req, res);
});

router.get("/ranking/:idMinigame", function (req, res) {
    minigamesController.ranking(req, res);
});

router.get("/buscarGeral/:idMinigame", function (req, res) {
    minigamesController.buscarGeral(req, res);
});

router.get("/buscarMedia/:idMinigame", function (req, res) {
    minigamesController.buscarMedia(req, res);
});

router.get("/buscarJogador", function (req, res) {
    minigamesController.buscarJogador(req, res);
});


module.exports = router;