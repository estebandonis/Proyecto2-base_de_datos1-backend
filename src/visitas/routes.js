const { Router } = require('express');
const controller = require('./controller');

const router = Router()




router.get('/', controller.getVisitas);
router.get('/:pacienteid', controller.getVisitasBypacienteID);

router.post("/", controller.addVisita);

module.exports = router;