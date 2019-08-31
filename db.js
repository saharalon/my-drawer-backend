const Sequelize = require('sequelize');

const db = process.env.DB_NAME;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(db, user, password, {
    host: host,
    port: port,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

const classes = Symbol('Auxiliary classes');
sequelize[classes] = {};

sequelize.getClass = function(className) {
    return sequelize[classes][className];
};

sequelize.setClass = function(className, classReference) {
    sequelize[classes][className] = classReference;
};

module.exports = sequelize;
