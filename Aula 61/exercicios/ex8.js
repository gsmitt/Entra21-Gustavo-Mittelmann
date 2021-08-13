const db = require("./db");
const format = require("pg-format");
const { Pool } = require("pg")

const pool = new Pool()

async function comprar(dados_compra){
    const client = await pool.connect()
    
    try{
        await client.query("BEGIN")

    } catch(error){
        await client.query('ROLLBACK')
        console.log(error);
    } finally{
        db.end();
    }

}

