const Sequelize = require("sequelize");

const sequalize = require("../utils/database");

const Patient = sequalize.define('patient',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey:true
    },
    patient_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    blood_group: Sequelize.STRING,
    patient_dob:{
        type:Sequelize.DATE,
        allowNull:false
    },
    patient_gender:{
        type:Sequelize.STRING,
        allowNull:false
    },
    patient_mobile:{
        type:Sequelize.BIGINT,
        allowNull:false,
        unique:true
    },
    patient_district:{
        type:Sequelize.STRING,
        allowNull:false
    },
    patient_email:{
        type:Sequelize.STRING,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
});



module.exports = Patient;