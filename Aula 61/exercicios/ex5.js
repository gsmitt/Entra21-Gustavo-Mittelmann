const db = require("./db");
const format = require("pg-format");

async function insereEditoras(editoras) {
    try {
        let es = []
        for (let i = 0; i < editoras.length; i++){
            const e = [editoras[i].nome_gerente,editoras[i].telefone]
            es.push(e)
        } 
        const query = format(`
            INSERT INTO editoras(gerente,telefone) 
            VALUES %L RETURNING *
        `, es)
        const res = await db.query(query)
        console.log(res.rows)
    } catch(error){
        console.log(error.message)
    } finally {
        db.end();
    }
};
/*
const editora1 = {
    nome_gerente: "Velho1",
    telefone: "123"
}
const editora2 = {
    nome_gerente: "Velho2",
    telefone: "321"
}
const editora3 = {
    nome_gerente: "Velho3",
    telefone: "312"
}
const editora4 = {
    nome_gerente: "Velho4",
    telefone: "213"
}
const editora5 = {
    nome_gerente: "Velho5",
    telefone: "132"
}
const editoras = [editora1,editora2,editora3,editora4,editora5]

insereEditoras(editoras)
*/