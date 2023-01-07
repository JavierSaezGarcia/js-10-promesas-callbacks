import { obtenerHeroesArr, obtenerHeroAwait, heroesCiclo, heroeIfAwait } from "./js/await";

// console.time('await');
// // obtenerHeroesArr()
// //     .then( 
// //         heroes => {
// //             console.table( heroes );
// //             console.timeEnd('await');
// //         });
// //  /*o lo que es lo mismo*/
// // obtenerHeroesArr().then(  console.table );
// obtenerHeroAwait('antorcha2')
//     .then( heroe => {
//         console.log( heroe );
//         console.timeEnd('await');
//     })
//     .catch( console.warn)

heroesCiclo();  

heroeIfAwait('hulk');

