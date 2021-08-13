const db = require("./db");
const format = require("pg-format");



(async () => {
    //try {
    //    const res = await db.query("SELECT NOW()");
    //    console.log(res.rows[0].now);
    //} catch (error) {
    //    console.log(error.message);
    //} finally {
    //    db.end();
    //}

    //try {
    //    await db.query(`
    //    CREATE TABLE IF NOT EXISTS funcionarios (
    //        id SERIAL PRIMARY KEY,
    //        nome text NOT NULL,
    //        email text NOT NULL UNIQUE,
    //        telefone text NOT NULL UNIQUE
    //    );
    //
    //    CREATE TABLE IF NOT EXISTS enderecos (
    //        id SERIAL PRIMARY KEY,
    //        rua text NOT NULL,
    //        numero int NOT NULL,
    //        cidade text NOT NULL,
    //        estado text NOT NULL,
    //        id_funcionario int NOT NULL REFERENCES funcionarios
    //    );
    //    `);
    //    console.log("Tabelas criadas com sucesso!");
    //} catch (error) {
    //    console.log(error.message);
    //} finally {
    //    db.end();
    //}

    try {
        const funcionarios = [
            ["joão", "joão@email.com", "(47) 9 9992 9999"],
            ["maria", "maria@email.com", "(47) 9 9292 9999"],
        ]

        const query = format("INSERT INTO funcionarios (nome, email, telefone) VALUES %L RETURNING *", funcionarios);

        const res = await db.query(query);

        console.log(res.rows[0]);
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
})();