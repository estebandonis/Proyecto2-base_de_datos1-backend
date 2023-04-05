const getMedicos = "SELECT * FROM medicos"
const getMedicoById = "SELECT * FROM medicos WHERE medicoid = $1"
const checkNumColExists = "SELECT nombre FROM medicos WHERE numero_colegiado = $1"
const addMedico = "INSERT INTO medicos (nombre, apellido, direccion, telefono, numero_colegiado, especialidad, lugarid) VALUES ($1, $2, $3, $4, $5, $6, $7)"
const updateMedico = "UPDATE medicos SET nombre = $1 WHERE medicoid = $2"

module.exports = {
    getMedicos,
    getMedicoById,
    checkNumColExists,
    addMedico,
    updateMedico,
}