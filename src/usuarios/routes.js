const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get("/:one&:two", controller.getTipo)
router.get("/", controller.getUsuarios)

router.post("/:one&:two&:three", controller.addUsuarios)

router.put("/update_correo/:one&:two", controller.updateCorreo)
router.put("/update_password/:one&:two", controller.updateContraseña)
router.put("/update_num/:one&:two", controller.updateNum)
router.put("/update_lugarid/:one&:two", controller.updateLugarid)

module.exports = router