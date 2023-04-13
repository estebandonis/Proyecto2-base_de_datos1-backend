const getVisitas = 'SELECT * FROM visitas';
const getVisitasById= "SELECT * FROM visitas WHERE visitaid = $1";
const checkVisitaExists= "SELECT visitaid FROM pacientes WHERE pacienteid= $1";
const getVisitasBypacienteID = "SELECT * FROM visitas WHERE pacienteid = $1";
const addVisita = "INSERT INTO visitas (visitaid, pacienteid, fecha, hora, lugarid, medicoid, examen,enfermedadid,medicamentos,evolucion) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9,$10)"



module.exports ={
    getVisitas,getVisitasBypacienteID,checkVisitaExists, addVisita
}