const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')


const getMedicos = (req, res) => {
    pool.query(queries.getMedicos, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getMedicoByNum = (req, res) => {
    const numero_colegiado = req.params.numero_colegiado

    pool.query(queries.getMedicoByNum, [numero_colegiado], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const addMedico = (req, res) => {
    const { nombre, apellido, direccion, telefono, numero_colegiado, especialidad, lugarid } = req.body

    // verificar si ya existe el numero de colegiado
    pool.query(queries.checkNumColExists, [numero_colegiado], (error, results) => {

        if (results.rows.length) {
            res.send("Ya han registrado este numero de colegiado")
        }

        // agregar medico a base de datos
        pool.query(queries.addMedico, [nombre, apellido, direccion, telefono, numero_colegiado, especialidad, lugarid], (error, results) => {
            if (error) throw error
            res.status(201).send("Medico agregado existosamente")
        })
    })
}

const updateMedico = (req, res) => {
    const numero_colegiado = req.params.numero_colegiado
    const { nombre } = req.body

    pool.query(queries.getMedicoByNum, [numero_colegiado], (error, results) => {
        const noExisteMedico = !results.rows.length
        if (noExisteMedico) {
            res.send("El medico no existe")
        }

        pool.query(queries.updateMedico, [nombre, numero_colegiado], (error, results) => {
            if (error) throw error
            res.status(200).send("Medico actualizado exitosamente")
        })
    })
}

module.exports = {
    getMedicos,
    getMedicoByNum,
    addMedico,
    updateMedico,
}