const Pool = require('pg').Pool

const pool = new Pool({
    host: "database-1.cdwyldhrs5op.us-east-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "proyecto123",
    database: "proyecto2"
})

module.exports = pool