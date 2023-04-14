const getMedicos = "SELECT * FROM medicos ORDER BY medicoid ASC"
const getMedicosByLugarid = "SELECT * FROM medicos WHERE lugarid = $1 ORDER BY medicoid ASC"
const getMedicoByNum = "SELECT * FROM medicos WHERE numero_colegiado = $1"
const checkNumColExists = "SELECT nombre FROM medicos WHERE numero_colegiado = $1"
const addMedico = "INSERT INTO medicos (nombre, apellido, direccion, telefono, numero_colegiado, especialidad, lugarid) VALUES ($1, $2, $3, $4, $5, $6, $7)"
const updateMedicoNombre = "UPDATE medicos SET nombre = $1 WHERE numero_colegiado = $2"
const updateMedicoApellido = "UPDATE medicos SET apellido = $1 WHERE numero_colegiado = $2"
const updateMedicoDireccion = "UPDATE medicos SET direccion = $1 WHERE numero_colegiado = $2"
const updateMedicoTelefono = "UPDATE medicos SET telefono = $1 WHERE numero_colegiado = $2"
const updateMedicoEspecialidad = "UPDATE medicos SET especialidad = $1 WHERE numero_colegiado = $2"
const updateMedicoLugarId = "UPDATE medicos SET lugarid = $1 WHERE numero_colegiado = $2"

module.exports = {
    getMedicos,
    getMedicosByLugarid,
    getMedicoByNum,
    checkNumColExists,
    addMedico,
    updateMedicoNombre,
    updateMedicoApellido,
    updateMedicoDireccion,
    updateMedicoTelefono,
    updateMedicoEspecialidad,
    updateMedicoLugarId,
}