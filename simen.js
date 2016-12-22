let Chapitre = require('./db_models/chapitre');

let log = (inst) => console.dir(inst.get());

Chapitre.findAll({
  attributes: ['id_niveau','libelle', 'date_last_modif'],
  limit: 10,
  where: {
    id_niveau: '6'
  },
  order: 'date_last_modif'
})
.then(function(chapitres) {
    chapitres.forEach(log);
});
