const { Router } = require('express');
const controller = require('./controller');

const router = Router()

router.get('/', controller.getVisitas);
router.get('/:pacienteid', controller.getVisitasBypacienteID);
router.get('/get_examenes/:dpi', controller.getExamenesByDPI);
router.get('/get_cirugias/:dpi', controller.getCirugiasByDPI);
router.get('/get_medicosOfPaciente/:dpi', controller.getMedicosOfPaciente);
router.get('/get_medicamentosYevolucion/:dpi', controller.getMedicamentosYEvolucion);

router.post("/", controller.addVisita);

module.exports = router;