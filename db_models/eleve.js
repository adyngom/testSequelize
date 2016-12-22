const Sequelize = require('sequelize');
const connect = require('../config/db_connect');
let simenEleveConnect = connect.mysql_eleve();

// begin path with '@dialect://@user:@password'
let sqlUrl = 'mysql://' + simenEleveConnect.user + ':' + simenEleveConnect.pass;
// add to path @host:@port
sqlUrl += '@' + simenEleveConnect.host + ':' + simenEleveConnect.port;
// add to path /@database
sqlUrl += '/' + simenEleveConnect.db;

const db = new Sequelize(sqlUrl);

db
  .authenticate()
  .then(function(payload) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

const Eleve = db.define('simen_eleves', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    prenom: {
      type: Sequelize.STRING,
      required: true
    },
    nom: {
      type: Sequelize.STRING,
      required: true
    }
  },
  {
    timestamps: false
  }
);

module.exports = Eleve;
