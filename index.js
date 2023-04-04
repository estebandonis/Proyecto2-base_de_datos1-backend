const { Client } = require('pg')

const obtenerMedicos = async () => {
    const client = new Client({
        host: "database-1.cdwyldhrs5op.us-east-1.rds.amazonaws.com",
        user: "postgres",
        port: 5432,
        password: "proyecto123",
        database: "proyecto2"
    })
    
    await client.connect()
    
    const res = await client.query("SELECT * FROM medicos")
    debugger
    const result = res.rows 

    await client.end()
    return result
}

obtenerMedicos().then((result) => {
    console.log(result)
})