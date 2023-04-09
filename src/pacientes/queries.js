const getPacientes = 'SELECT * FROM pacientes';
const getPacienteById = "SELECT * FROM pacientes WHERE pacienteid = $1"
const checkNumColExists = "SELECT nombre FROM medicos WHERE numero_colegiado = $1"
const addPaciente = "INSERT INTO medicos (nombre, apellido, direccion, telefono, numero_colegiado, especialidad, lugarid) VALUES ($1, $2, $3, $4, $5, $6, $7)"
const updatePaciente = "UPDATE pacientes SET nombre = $1 WHERE pacienteid = $2"

module.exports ={
    getPacientes, getPacienteById,
}