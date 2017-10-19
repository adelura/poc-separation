import vegetablesModel from "vegetables-model";

program
    .version('0.1.0')
    .command('rm <id>')
    .action(async function (id) {
        console.log('Removing vegetable: %s', id);

        await vegetablesModel.remo
    });

program.parse(process.argv);