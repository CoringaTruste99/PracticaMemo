const express = require('express');
const router = express.Router();

const ContadorController = require('../Controllers/ContadorController');

router.get('/contador', ContadorController.getContador);
router.get('/incrementar', ContadorController.IncrementarContador);

module.exports = router;