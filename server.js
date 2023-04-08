const express = require('express')
const medicosRoutes = require('./src/medicos/routes')
const usuariosRoutes = require('./src/usuarios/routes')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use('/api/v1/medicos', medicosRoutes)
app.use('/api/v1/usuarios', usuariosRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`))

