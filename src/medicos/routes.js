const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get("/", controller.getMedicos)
router.get("/:id", controller.getMedicosById)

router.post("/", controller.addMedico)

router.put("/:id", controller.updateMedico)

module.exports = router