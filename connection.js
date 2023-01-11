const Sequelize = require("sequelize");

const DATABASE_URL =
process.env.DATABASE_URL || "mysql://Playlist:name_music@localhost:3306/DB_Playlist";

const connection = new Sequelize(DATABASE_URL);

connection.authenticate().then(() => console.log("Connected to DB"));

module.exports = connection;
