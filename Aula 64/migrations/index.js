const { sequelize, Usuario } = require("./db/models");

(async () => {
    try {
        await sequelize.sync({ force:true })

        await sequelize.authenticate();
        console.log("Cosnexão bem-sucedida!");

        // Inserindo um usuário
        const pedro = await Usuario.create({
            nome: "pedro",
            email: "pedro@email.com",
            senha: "123456"
        });
        
        console.log("Usuario criado com sucesso!");

        // Inserindo um endereço
        await pedro.createEndereco({
            rua: "Rua 01",
            numero: 123
        });
        console.log("Endereco criado com sucesso!");

        // Inserindo um projeto
        await pedro.createProjeto({
            nome: "Projeto 01",
            quantidadeHoras: 10
        });
        console.log("Projeto criado com sucesso!");

    } catch(error) {
        console.error("Erro", error);
    } finally {
        sequelize.close();
    }
})();