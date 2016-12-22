const Sequelize = require('sequelize');
const connect = require('../config/db_connect');
let simenConnect = connect.mysql_simen();

// begin path with '@dialect://@user:@password'
let sqlUrl = 'mysql://' + simenConnect.user + ':' + simenConnect.pass;
// add to path @host:@port
sqlUrl += '@' + simenConnect.host + ':' + simenConnect.port;
// add to path /@database
sqlUrl += '/' + simenConnect.db;

console.log(sqlUrl);

const db = new Sequelize(sqlUrl);

db
  .authenticate()
  .then(function(payload) {
    console.log('Connection to s2i9men5new_ms has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  const Chapitre = db.define('plan_vscol1_chapitres',
  {
    id: {
      type: Sequelize.BIGINT(20),
      primaryKey: true,
      autoIncrement: true
    },
    id_mat_disc_fils: {
      type: Sequelize.INTEGER(11)
    },
    id_niveau: {
      type: Sequelize.INTEGER(11)
    },
    id_op_saisie: {
      type: Sequelize.INTEGER(11)
    },
    id_parent: {
      type: Sequelize.BIGINT(20)
    },
    type_chapitre: {
      type: Sequelize.ENUM('palier', 'oa', 'chapitre', 'competence')
    },
    libelle: {
      type: Sequelize.TEXT,
      collate: 'latin1_swedish_ci'
    },
    commentaires: {
      type: Sequelize.TEXT,
      collate: 'latin1_swedish_ci'
    },
    lib_integration: {
      type: Sequelize.TEXT,
      collate: 'latin1_swedish_ci'
    },
    z_theme: {
      type: Sequelize.TEXT,
      collate: 'latin1_swedish_ci'
    }

  },
  {
    timestamps: true,
    createdAt: false,
    updatedAt: 'date_last_modif'
  });

  module.exports = Chapitre;
