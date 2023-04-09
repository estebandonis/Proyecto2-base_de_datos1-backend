const getTipo = "SELECT tipo FROM usuarios WHERE correo = $1 AND contraseña = $2"
const getByNum = "SELECT * FROM usuarios WHERE num_colegiado = $1"
const getUsuarios = "SELECT * FROM Usuarios"
const addUsuario = "INSERT INTO usuarios (tipo, correo, contraseña, num_colegiado) VALUES ('medico', $1, $2, $3)"

module.exports = {
    getTipo,
    getByNum,
    getUsuarios,
    addUsuario,
}