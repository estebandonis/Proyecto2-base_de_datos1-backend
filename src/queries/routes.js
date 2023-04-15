const { Router } = require('express');
const controller = require('./controller');

const router = Router()

router.get('/get_nombre_medicos/', controller.getNombreMedicos);

module.exports = router;