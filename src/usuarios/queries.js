const getTipo = "SELECT tipo FROM usuarios WHERE correo = $1 AND contraseña = $2"
const getUsuarios = "SELECT * FROM Usuarios"

module.exports = {
    getTipo,
    getUsuarios,
}