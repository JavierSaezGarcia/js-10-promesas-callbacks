import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";
import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";
import "./styles.css";

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );
// Para hacer lo anterior hay una forma que es el promise.race
// pero COMO SU NOMBRE INDICA 'RACE' SE MOSTRARA LA MAS RAPIDA UNICAMENTE
// AUNQUE ALGUNA DE LAS MAS LENTAS DE ALGUN ERROR LA IGNORARÍA Y SOLO MOSTRARIA LA MAS RAPIDA

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch( console.warn );

// en antorcha hay un error pero se ejecuta daredevil y despues se muestra el error una vez mostrados todos los successful
buscarHeroe('antorcha2')
    .then( heroe => console.log( heroe ) )
    .catch( console.warn )
buscarHeroeAsync('daredevil2')
    .then( heroe => console.log( heroe ) )
    .catch( console.warn )