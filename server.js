const express = require('express')
const medicosRoutes = require('./src/medicos/routes')
const pacientesRoutes = require('./src/pacientes/routes')
const visitasRoutes = require('./src/visitas/routes');
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use('/api/v1/medicos', medicosRoutes)
app.use('/api/v1/pacientes', pacientesRoutes)
app.use('/api/v1/visitas', visitasRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`));

