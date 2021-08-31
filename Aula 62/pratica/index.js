const sequelize = require("./database");
const bcrypt = require("bcrypt")
const { Usuario } = sequelize.models;
const { Projeto } = sequelize.models;
const { Endereco } = sequelize.models;

(async () => {

    try {
        // Criando a tabela Usuarios
        //await Usuario.sync({force:true});
        //console.log("Tabela criada com sucesso!");

        // Criando todas as tabelas
        await sequelize.sync({ force: true });


        // Inserindo um usuario
        //const pedro = await Usuario.create({
        //    nomeCompleto: "Pedro",
        //    email: "pedro@email.email",
        //    senha: "123456"
        //});
        //console.log(pedro.toJSON());


        // Modificar o pedro
        //pedro.email = "pedrao@email.com";
        //await pedro.save();
        //console.log("Email do pedro atualizado");

        // Remover o pedro
        //await pedro.destroy();

        // Inserindo varios usuarios
        const usuarios = await Usuario.bulkCreate([
            {
                nomeCompleto: "Pedro",
                email: "pedro@email.email",
                senha: "123456"
            },
            {
                nomeCompleto: "Jose",
                email: "Jose@email.email",
                senha: "123456"
            }
        ])
        // Comparando uma senha

        console.log(bcrypt.compareSync("123456", usuarios[0].toJSON().senha));

        // Selecionar todos os usuarios
        //const todos = await Usuario.findAll({
        //    where: {
        //        nomeCompleto: {
        //            [Op.iLike]: "%P%"
        //        }
        //    }
        //});
        //console.log(todos)

        // Criando um endereco
        /*
        await Endereco.create({
            rua: "Rua 01",
            numero: 123,
            idUsuario: usuarios[0].id
        });
        */
        //await usuarios[0].createEndereco({
        //    rua: "Rua 01",
        //   numero: 123
        //});

        // Criando um projeto
        //const projeto = await Projeto.create({
        //nome: "Projeto Verão 2021",
        //    quantidadeHoras: 60
        //});

        //await projeto.addUsuario(usuarios[0]);

        //console.log(usuarios[0].checarSenha("123456"));

    } catch (err) {
        console.error("Ocorreu algum erro ao criarr a tabela", err);
    } finally {
        sequelize.close();
    }
})();