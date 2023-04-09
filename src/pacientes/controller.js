const pool = require('../../db');
const queries = require('./queries');

const getPacientes = (req,res)=>{
    pool.query(queries.getPacientes,(error,results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);

    })
}
const getPacienteById = (req,res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getPacienteById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

module.exports ={
    getPacientes, getPacienteById,
}