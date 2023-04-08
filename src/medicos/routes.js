const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get("/", controller.getMedicos)
router.get("/:numero_colegiado", controller.getMedicoByNum)

router.post("/", controller.addMedico)

router.put("/:numero_colegiado", controller.updateMedico)

module.exports = router