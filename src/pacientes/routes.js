const { Router } = require('express');
const controller = require('./controller');

const router = Router()

router.get('/', controller.getPacientes);
router.get('/:id', controller.getPacienteById);


module.exports = router;