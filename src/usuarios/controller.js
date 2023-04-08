const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')


const getTipo = (req, res) => {
    const correo = req.params.one
    const contraseña = req.params.two

    pool.query(queries.getTipo, [correo, contraseña], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getUsuarios = (req, res) => {

    pool.query(queries.getUsuarios, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getTipo,
    getUsuarios,
}