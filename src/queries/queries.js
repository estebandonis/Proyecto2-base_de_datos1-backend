const getNombreMedicos = "SELECT medicos.nombre , COUNT(*) as num_pacientes FROM medicos JOIN pacientes ON medicos.medicoID = pacientes.pacienteID GROUP BY medicos.nombre ORDER BY num_pacientes DESC LIMIT 10";

module.exports ={
    getNombreMedicos
}