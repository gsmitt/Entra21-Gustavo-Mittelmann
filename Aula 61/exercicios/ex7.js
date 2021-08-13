const db = require("./db");
const format = require("pg-format");

async function obtemLivros(livros) {
    try {
        const query = format(`
            SELECT * FROM livros WHERE id IN (%L)
        `, livros)
        const res = await db.query(query)
        console.log(res.rows)
    } catch (error){
        console.log(error.message);
    } finally{
        db.end();
    }
};

const livros = [['72c08817-20b1-4dd8-a6b6-d79bf784a2bf'],['837459a5-7fa4-46a3-9f29-2fdb20669d56']]

obtemLivros(livros)