const getPacientes = 'SELECT * FROM pacientes';
const getPacienteById = "SELECT * FROM pacientes WHERE pacienteid = $1";
const checkPacienteExists= "SELECT nombre FROM pacientes WHERE dpi = $1";
const addPaciente = "INSERT INTO pacientes (nombre, apellido, telefono, direccion, masa_corporal, altura, peso, adicciones,evoluciones,status,dpi) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9,$10,$11,$12)"
const updatePacienteNombre= "UPDATE pacientes SET nombre = $1 WHERE pacienteid = $2"

module.exports ={
    getPacientes, getPacienteById, addPaciente, checkPacienteExists, updatePacienteNombre,
}