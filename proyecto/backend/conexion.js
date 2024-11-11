const dotenv = require('dotenv');
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const CLUSTER = process.env.CLUSTER;
const DB_NAME = process.env.DB_NAME;


const conexion = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = conexion;



