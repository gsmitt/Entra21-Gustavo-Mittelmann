const db = require("./db");
const format = require("pg-format");

async function insereLivros(livros) {
    try {
        let ls = []
        for (let i = 0; i < livros.length; i++){
            const l = [livros[i].isbn,livros[i].nome_autor,livros[i].assunto,livros[i].preco,livros[i].quantidade_estoque,livros[i].id_editora]
            ls.push(l);
        } 
        const query = format(`
            INSERT INTO livros(isbn,autor,assunto,preco,estoque,id_edit) 
            VALUES %L RETURNING *
        `, ls);
        const res = await db.query(query);
        console.log(res.rows)
    } catch(error){
        console.log(error.message);
    } finally {
        db.end();
    }
};
/*
const livro1 = {
    isbn: "sdfasf",
    nome_autor: "asdasfasfasd",
    assunto: "asfaf",
    preco: 1231,
    quantidade_estoque: 32,
    id_editora: 'fca1b510-ca13-4da3-97d7-09e3c9127759'
}

const livro2 = {
    isbn: "asddasd",
    nome_autor: "asdasd",
    assunto: "asdadaasd",
    preco: 123,
    quantidade_estoque: 3,
    id_editora: 'd2d81d7a-7ea9-4da1-9ffd-d09437255775'
}
const livro3 = {
    isbn: "1231d",
    nome_autor: "carlos",
    assunto: "daasd",
    preco: 1232,
    quantidade_estoque: 23,
    id_editora: '5a0a731b-a918-4c07-b613-7c410999bb2b'
}
const livro4 = {
    isbn: "a2131231",
    nome_autor: "asda1231sd",
    assunto: "asdada12313asd",
    preco: 1223,
    quantidade_estoque: 323,
    id_editora: 'e8217a6b-1948-44d4-af58-5c52f527c563'
}
const livro5 = {
    isbn: "asddas213d",
    nome_autor: "asda1321sd",
    assunto: "asdada13213asd",
    preco: 121323,
    quantidade_estoque: 12333,
    id_editora: '4011ba60-83d7-4ba8-8aab-a32c6a30f359'
}

const livros = [livro1,livro2,livro3,livro4,livro5]
*/