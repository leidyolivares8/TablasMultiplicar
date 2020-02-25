const argv = require('./config/yargs').argv;

const { creararchivo, listartabla } = require(`./multiplicar_2/multiplica`); //destructuracion despues de un let o const y {}

let comando = argv._[0];
switch (comando) { //switch es como un if permite una acción dependiendo de una condicion

    case 'Listar':
        listartabla(argv.base, argv.limite);
        break;
    case 'Crear':
        creararchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}


//let base = '3';
//let argv2 = process.argv;
//console.log('Base:', argv.base);
//console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1] //split separar elementos convierte string en un arreglo base,5

//console.log(base);