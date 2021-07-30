const fsp = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

// 1)
//(async () => {
//    try {
//        const data = await fsp.readFile(path.resolve(__dirname,"exercicioNomes.txt"));
//        const nomes = data.toString("utf-8").split(EOL)
//        const coma = nomes.filter(nome => nome[0].toUpperCase() == "A")
//        console.log(coma)
//    } catch (err) {
//        console.log(err.message);
//    }
//})();

// 2)
async function getUserByName(name) {
    try{
        const data = await fsp.readFile(path.resolve(__dirname,"users.json"));
        const proc = JSON.parse(data.toString("utf-8"));
        for (let i of proc){
            if (i.nome == name){
                return console.log(`Nome: ${i.nome + EOL} Idade: ${i.idade + EOL} Email: ${i.email}`)
            }
        }
        console.log("Usuário não foi encontrado.")
    } catch (err) {
        console.log(err.message);
    }
}

getUserByName("Maria")