const fs = require('fs');

const crearArchivo = async (base, listar, limite) => {

  try {

    let resultado = '';

    for (let index = 1; index <= limite; index++) {
      resultado += (`${base} * ${index} = ${base * index}\n`);
    }

    if(listar){
      console.log('======================');
      console.log(`  Tabla del ${base}`);
      console.log('======================');
      console.log(resultado);
    }

    fs.writeFileSync(`./salida/table-${base}.txt`, resultado);

    return `table-${base}.txt`;

  } catch (error) {
    throw error;
  }

}

module.exports = {
  crearArchivo: crearArchivo
};