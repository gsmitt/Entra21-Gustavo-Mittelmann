const db = require("./db");
const format = require("pg-format");
const { Pool } = require("pg");

const pool = new Pool()

async function obtemLivros(livros) {
    try {
        const query = db.query(format(`
            SELECT * FROM livros WHERE id IN (%L)
        `, livros));
        return query;
    } catch (error){
        console.log(error.message);
    }
};

async function comprar(dados_compra){
    try{
        await db.query("BEGIN");
        const livros = await obtemLivros(dados_compra.livros);
        let total = 0
        for (livro of livros.rows){
            let valor = Number(livro.preco);
            total += valor;
            await db.query(`
                INSERT INTO
                    compras 
                VALUES 
                    ($1,$2,$3,$4)`, [dados_compra.id_cliente, livro.id, dados_compra.data, valor]);
        }

        const cl = await db.query("SELECT pontos FROM clientes WHERE id=$1",[dados_compra.id_cliente]);
        const pontos = Math.floor(total/10) + cl.rows[0].pontos;

        await db.query("UPDATE clientes SET pontos = $1 WHERE id = $2", [pontos, dados_compra.id_cliente]);

        await db.query("COMMIT;");

    } catch(error){
        await db.query('ROLLBACK');
        console.log(error);
    } finally{
        db.end();
    }

}

const dados_compra = {
    id_cliente: '289e380d-c10f-4199-952d-527f96231b72',
    livros: [['72c08817-20b1-4dd8-a6b6-d79bf784a2bf'],['837459a5-7fa4-46a3-9f29-2fdb20669d56']],
    data: new Date()
}

//comprar(dados_compra)