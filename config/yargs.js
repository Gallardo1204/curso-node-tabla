const argv = require('yargs')
            .option(
              'b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla demultiplicar'
              }  
            )
            .option(
              'l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Muestra la tabla en consola'
              }
            )
            .option(
              'lm', {
                alias: 'limite',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Limite de la tabla de multiplicacion'
              }
            )
            .check(( argv, options) => {
              if( isNaN(argv.b) ){
                throw 'La base debe ser un numero'
              }
              return true;
            })
            .argv;

module.exports = argv;