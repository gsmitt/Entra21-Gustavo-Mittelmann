const db = require("./db");
const format = require("pg-format")

async function insereCliente(cliente) {
    try {
        const c = [cliente.nome,cliente.email,cliente.telefone,cliente.numero_documento,cliente.tipo_pessoa]
        const queryc =  format(`
            INSERT INTO clientes(nome,email,telefone,numero_documento,tipo_pes)
            VALUES %L RETURNING *
        `, [c]);
        const resc = await db.query(queryc);
        
        const e = [cliente.rua,cliente.numero,cliente.cidade,cliente.estado,cliente.cep,resc.rows[0].id]
        
        const querye =  format(`
            INSERT INTO enderecos(rua,numero,cidade,estado,cep,id_cliente)
            VALUES %L RETURNING *
        `, [e]);
        const rese = await db.query(querye);

        console.log(rese);

    } catch (error){
        console.log(error.message);
    } finally {
        db.end();
    }
};
/*
const cliente = {
    nome: "AA",
    email: "aa@aa.a",
    telefone: "40028922",
    numero_documento: "6924",
    tipo_pessoa: "PF",
    rua: "Rua A",
    numero: 123,
    cidade: "A",
    estado: "AA",
    cep: "12300052"
}

insereCliente(cliente)
*/