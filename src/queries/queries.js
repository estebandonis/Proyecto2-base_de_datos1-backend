const getNombreMedicos = "SELECT medicos.nombre , COUNT(*) as num_pacientes FROM medicos JOIN pacientes ON medicos.medicoID = pacientes.pacienteID GROUP BY medicos.nombre ORDER BY num_pacientes DESC LIMIT 10";
const getTopEnfermedades = "SELECT enfermedades.nombre_enfermedad, COUNT(*) as cantidad FROM enfermedades_paciente JOIN enfermedades ON enfermedades_paciente.enfermedadID = enfermedades.enfermedadID GROUP BY enfermedades.nombre_enfermedad ORDER BY cantidad DESC LIMIT 10;";
const getreporteMensual = "SELECT tipo, porcentaje_restante FROM abastecimientos WHERE lugarid = $1";
const getTopHospitales = "SELECT lugares.nombre, COUNT(*) as total_pacientes FROM pacientes INNER JOIN visitas ON pacientes.pacienteID = visitas.pacienteID INNER JOIN lugares ON visitas.lugarID = lugares.lugarID GROUP BY lugares.nombre ORDER BY total_pacientes DESC LIMIT 10;";
const getTopMedicos = "SELECT medicos.nombre, COUNT(*) as num_pacientes FROM medicos JOIN pacientes ON medicos.medicoID = pacientes.pacienteID GROUP BY medicos.nombre ORDER BY num_pacientes DESC LIMIT 10;";

module.exports ={
    getNombreMedicos, getTopEnfermedades,getreporteMensual, getTopHospitales, getTopMedicos,
} 