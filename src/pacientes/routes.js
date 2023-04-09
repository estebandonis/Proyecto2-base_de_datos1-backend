const { Router } = require('express');
const controller = require('./controller');

const router = Router()

router.get('/', controller.getPacientes);
router.get('/:id', controller.getPacienteById);


router.post("/", controller.addPaciente);

module.exports = router;