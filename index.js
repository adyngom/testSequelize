let Eleve = require('./db_models/eleve');

let log = (inst) => console.dir(inst.get());

Eleve.findAll({
    limit: 30,
    order: 'prenom'
}).then(function(eleves) {
    eleves.forEach(log);
});
