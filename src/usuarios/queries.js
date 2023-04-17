const getTipoyLugarid = "SELECT tipo, num_colegiado, lugarid FROM usuarios WHERE correo = $1 AND contraseña = $2"
const getByNum = "SELECT * FROM usuarios WHERE num_colegiado = $1"
const getUsuarios = "SELECT * FROM Usuarios ORDER BY userid ASC"
const getUsuarioLugarid = "SELECT lugarid FROM medicos WHERE numero_colegiado = $1"
const getUsuariosByLugarid = "SELECT * FROM Usuarios WHERE lugarid = $1 AND tipo = 'medico' ORDER BY userid ASC"
const addUsuario = "INSERT INTO usuarios (tipo, correo, contraseña, num_colegiado, lugarid) VALUES ('medico', $1, $2, $3, $4)"
const updateCorreo = "UPDATE usuarios SET correo = $1 WHERE num_colegiado = $2"
const updateContraseña = "UPDATE usuarios SET contraseña = $1 WHERE num_colegiado = $2"
const updateNum = "UPDATE usuarios SET numero_colegiado = $1 WHERE num_colegiado = $2"
const updateLugarid = "UPDATE usuarios SET lugarid = $1 WHERE num_colegiado = $2"

module.exports = {
    getTipoyLugarid,
    getByNum,
    getUsuarioLugarid,
    getUsuarios,
    getUsuariosByLugarid,
    addUsuario,
    updateCorreo,
    updateContraseña,
    updateNum,
    updateLugarid,
}