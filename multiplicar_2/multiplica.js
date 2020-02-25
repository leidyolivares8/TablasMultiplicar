const fs = require('fs'); //guardar resultado en un archivo

let creararchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor introducido ${base}no es un numero`);
            return; //return para parar el codigo
        }

        let data = ''; //2*1=2 ,2*2=4

        for (let i = 1; i <= limite; i++) {

            data += `${base}*${i}=${base * i}\n`; //+=concatenar aparece todo del 1 al 10 , solo el = aparece ultimo

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}.txt`);
        });

    });
}


let listartabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i}= ${base * i}`);
    }
}

module.exports = {
    creararchivo,
    listartabla
}