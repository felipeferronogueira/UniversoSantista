var express = require("express");
var router = express.Router();

var minigamesController = require("../controllers/minigamesController");

router.post("/pontuacaoEscalacao2011", function (req, res) {
    minigamesController.pontuacaoEscalacao2011(req, res);
})

module.exports = router;