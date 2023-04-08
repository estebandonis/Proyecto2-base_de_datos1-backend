const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get("/:one&:two", controller.getTipo)
router.get("/", controller.getUsuarios)

module.exports = router