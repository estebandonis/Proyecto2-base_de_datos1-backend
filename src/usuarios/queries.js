const getTipo = "SELECT tipo FROM usuarios WHERE correo = $1 AND contraseña = $2"
const getByNum = "SELECT * FROM usuarios WHERE num_colegiado = $1"
const getUsuarios = "SELECT * FROM Usuarios ORDER BY userid ASC"
const addUsuario = "INSERT INTO usuarios (tipo, correo, contraseña, num_colegiado) VALUES ('medico', $1, $2, $3)"
const updateCorreo = "UPDATE usuarios SET correo = $1 WHERE num_colegiado = $2"
const updateContraseña = "UPDATE usuarios SET contraseña = $1 WHERE num_colegiado = $2"
const updateNum = "UPDATE usuarios SET numero_colegiado = $1 WHERE num_colegiado = $2"
const updateLugarid = "UPDATE usuarios SET lugarid = $1 WHERE num_colegiado = $2"

module.exports = {
    getTipo,
    getByNum,
    getUsuarios,
    addUsuario,
    updateCorreo,
    updateContraseña,
    updateNum,
    updateLugarid,
}