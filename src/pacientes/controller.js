const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')


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


const addPaciente = (req, res) => {
    const { nombre, apellido, telefono, direccion, masa_corporal, altura, peso, adicciones,evoluciones,status,dpi } = req.body

    // verificar si ya existe el numero de colegiado
    pool.query(queries.checkPacienteExists, [dpi], (error, results) => {

        if (results.rows.length) {
            res.send("Ya han registrado este numero de colegiado")
        }

        // agregar medico a base de datos
        pool.query(queries.addPaciente, [ nombre, apellido, telefono, direccion, masa_corporal, altura, peso, adicciones,evoluciones,status,dpi], (error, results) => {
            if (error) throw error
            res.status(201).send("Paciente agregado existosamente")
        })
    })
}

module.exports ={
    getPacientes, getPacienteById, addPaciente
}