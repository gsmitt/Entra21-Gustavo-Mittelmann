const db = require("./db");
const format = require("pg-format");

async function insereclientes(clientes) {
    try {
        let cs = []
        for (let i = 0; i < clientes.length; i++){
            const c = [clientes[i].nome,clientes[i].email,clientes[i].telefone,clientes[i].numero_documento,clientes[i].tipo_pessoa]
            cs.push(c)
        } 
        const queryc =  format(`
            INSERT INTO clientes(nome,email,telefone,numero_documento,tipo_pes)
            VALUES %L RETURNING *
        `, cs);
        const resc = await db.query(queryc);
        
        let es = []
        for (let i = 0; i < clientes.length; i++){
            const e = [clientes[i].rua,clientes[i].numero,clientes[i].cidade,clientes[i].estado,clientes[i].cep,resc.rows[i].id]
            es.push(e)
        }
        const querye =  format(`
            INSERT INTO enderecos(rua,numero,cidade,estado,cep,id_cliente)
            VALUES %L RETURNING *
        `, es);
        const rese = await db.query(querye);

        console.log(rese.rows);

    } catch (error){
        console.log(error.message);
    } finally {
        db.end();
    }
};
/*
const cliente1 = {
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
const cliente2 = {
    nome: "BB",
    email: "bb@bb.b",
    telefone: "40228922",
    numero_documento: "1233",
    tipo_pessoa: "PJ",
    rua: "Rua B",
    numero: 1223,
    cidade: "B",
    estado: "BB",
    cep: "1222052"
}
const cliente3 = {
    nome: "CC",
    email: "cc@cc.c",
    telefone: "40218922",
    numero_documento: "6124",
    tipo_pessoa: "PF",
    rua: "Rua C",
    numero: 123,
    cidade: "C",
    estado: "CC",
    cep: "1230012052"
}
const clientes = [cliente1,cliente2,cliente3]
insereclientes(clientes)
*/