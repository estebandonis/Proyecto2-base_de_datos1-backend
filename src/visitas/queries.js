const getVisitas = 'SELECT * FROM visitas';
const getVisitasById= "SELECT * FROM visitas WHERE visitaid = $1";
const checkVisitaExists= "SELECT visitaid FROM pacientes WHERE pacienteid= $1";
const getVisitasBypacienteID = "SELECT * FROM visitas WHERE pacienteid = $1";
const getExamenesByDPI = "SELECT fecha, examen FROM visitas INNER JOIN pacientes USING (pacienteid) WHERE dpi = $1"
const getCirugiasByDPI = "SELECT fecha_hora, medicos.nombre, medicos.apellido, procedimiento FROM cirugias INNER JOIN medicos USING (medicoid) INNER JOIN pacientes USING(pacienteid) WHERE dpi = $1"
const getMedicosOfPaciente = "SELECT medicos.nombre, medicos.apellido, numero_colegiado, especialidad FROM medicos INNER JOIN cirugias USING (medicoid) INNER JOIN pacientes USING (pacienteid) WHERE dpi = $1"
const getMedicamentosYEvolucion = "SELECT fecha, medicamentos, evolucion FROM visitas INNER JOIN pacientes USING(pacienteid) WHERE dpi = $1"
const getLugaresVisitados = "SELECT DISTINCT fecha, hora, lugares.nombre FROM visitas INNER JOIN lugares USING (lugarid) INNER JOIN pacientes USING (pacienteid) WHERE dpi = $1"
const getVisitasEspecificas = "SELECT pacientes.nombre, fecha, hora, lugares.nombre AS lugar, medicos.nombre AS medico, examen, nombre_enfermedad, medicamentos, evolucion FROM visitas INNER JOIN pacientes USING (pacienteid) INNER JOIN lugares USING(lugarid) INNER JOIN medicos USING (medicoid) INNER JOIN enfermedades USING (enfermedadid) WHERE dpi = $1"
const addVisita = "INSERT INTO visitas (visitaid, pacienteid, fecha, hora, lugarid, medicoid, examen,enfermedadid,medicamentos,evolucion) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9,$10)"

module.exports ={
    getVisitas,getVisitasBypacienteID,checkVisitaExists, addVisita, getExamenesByDPI, getCirugiasByDPI, getMedicosOfPaciente, getMedicamentosYEvolucion, getLugaresVisitados, getVisitasEspecificas
}