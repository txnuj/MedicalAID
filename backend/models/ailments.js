const Sequelize = require("sequelize");

const sequalize = require("../utils/database");

const Ailments = sequalize.define('ailments',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey:true
    },
    ailment:{
        type:Sequelize.TEXT,
        allowNull:false,
    }
});

module.exports = Ailments;