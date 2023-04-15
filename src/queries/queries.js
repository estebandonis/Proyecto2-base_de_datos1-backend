const getNombreMedicos = "SELECT medicos.nombre , COUNT(*) as num_pacientes FROM medicos JOIN pacientes ON medicos.medicoID = pacientes.pacienteID GROUP BY medicos.nombre ORDER BY num_pacientes DESC LIMIT 10";
const getTopEnfermedades = "SELECT enfermedades.nombre_enfermedad, COUNT(*) as cantidad FROM enfermedades_paciente JOIN enfermedades ON enfermedades_paciente.enfermedadID = enfermedades.enfermedadID GROUP BY enfermedades.nombre_enfermedad ORDER BY cantidad DESC LIMIT 10;";
const getreporteMensual = "SELECT lugares.nombre, abastecimientos.porcentaje_restante FROM abastecimientos INNER JOIN lugares ON abastecimientos.lugarID = lugares.lugarID WHERE abastecimientos.porcentaje_restante < 50 ORDER BY lugares.lugarID;";
const getTopHospitales = "SELECT lugares.nombre, COUNT(*) as total_pacientes FROM pacientes INNER JOIN visitas ON pacientes.pacienteID = visitas.pacienteID INNER JOIN lugares ON visitas.lugarID = lugares.lugarID GROUP BY lugares.nombre ORDER BY total_pacientes DESC LIMIT 10;";
const getTopMedicos = "SELECT m.medicoID, m.nombre AS medico_nombre, COUNT(*) AS total_visitas FROM visitas v INNER JOIN medicos m ON v.medicoID = m.medicoID GROUP BY m.medicoID, m.nombre ORDER BY total_visitas desc LIMIT 10;";

module.exports ={
    getNombreMedicos, getTopEnfermedades,getreporteMensual, getTopHospitales, getTopMedicos,
} 