require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");
const sequelize = new Sequelize(dbConfig);

const Usuario = require("../models/Usuario");
const Projeto = require("../models/Projeto");
const Endereco = require("../models/Endereco");

// Iniciando Models
Usuario.init(sequelize);
Projeto.init(sequelize);
Endereco.init(sequelize);

// Definindo as associações
Usuario.associate(sequelize.models);
Projeto.associate(sequelize.models);
Endereco.associate(sequelize.models);

module.exports = sequelize;

// Testando a conexão

/*
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conxão bem-sucedida!");
    } catch (error) {
        console.error("Conexão falhou!", error);
    } finally {
        sequelize.close();
    }
})();
*/