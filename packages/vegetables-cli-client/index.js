let program = require('commander');
let VegetablesModel = require("vegetables-model");
let Vegetable = require("vegetables-model/Vegetable");
let fetch = require('node-fetch');

let vegetablesModel = new VegetablesModel(fetch);

program
    .version('0.1.0')
    .command('rm <id>')
    .action(function (id) {
        console.log('Removing vegetable: %s', id);

        vegetablesModel.removeVegetable(id);
    });

program
    .command('add <name>')
    .action(function (name) {
        return new Promise(function (resolve) {
            vegetablesModel
                .addVegetable(name)
                .then(res => res.json())
                .then((veg) => console.log("Vegetable added", veg))
                .then(resolve);
        });
    });

program.parse(process.argv);