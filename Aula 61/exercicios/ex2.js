const db = require("./db");

(async () => {
    try {
        await db.query (`
        CREATE TYPE tipo_pess AS ENUM ('PF', 'PJ');

        CREATE TABLE IF NOT EXISTS clientes (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
            email text NOT NULL,
            nome text NOT NULL,
            telefone text NOT NULL,
            numero_documento text NOT NULL,	
            tipo_pes tipo_pess NOT NULL,
            pontos int NOT NULL DEFAULT 0
        );
        
        CREATE TABLE IF NOT EXISTS editoras (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
            telefone text NOT NULL,
            gerente text NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS livros (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
            isbn text NOT NULL,
            autor text NOT NULL,
            assunto text NOT NULL,
            estoque int NOT NULL,
            preco numeric NOT NULL,
            id_edit uuid NOT NULL REFERENCES editoras
        );
        
        CREATE TABLE IF NOT EXISTS compras (
            id_cliente uuid,
            id_livro uuid,
            data date DEFAULT now,
            valor numeric NOT NULL,
            FOREIGN KEY (id_livro) REFERENCES livros,
            FOREIGN KEY (id_cliente) REFERENCES clientes,
            PRIMARY KEY (id_cliente, id_livro, data)
        );
        
        CREATE TABLE IF NOT EXISTS enderecos (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (), 
            rua text NOT NULL, 
            numero int NOT NULL, 
            cidade text NOT NULL, 
            estado text NOT NULL, 
            cep text NOT NULL, 
            id_cliente uuid REFERENCES clientes
        );
        `)
        console.log("Tabelas criadas com sucesso!");
    } catch (error){
        console.log(error.message);
    } finally {
        db.end();
    }
})();