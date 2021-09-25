const Sequelize = require("sequelize");

const sequelize = new Sequelize('medicords','root','MediCords',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;