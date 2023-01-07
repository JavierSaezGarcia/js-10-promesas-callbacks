import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks";
import { buscarHeroe } from "./js/promesas";
import "./styles.css";

const heroeId1 = 'spider';
const heroeId2 = 'iron';
const heroeId3 = 'capi';
// Callback es pasar una funcion enviada como un argumento
buscarHeroeCallback( heroeId1, ( err, heroe1 ) => {
    
    // if( err ){
    //     console.error( err );
    // }else {
    //     console.info( heroe );
    // } 
    
    ( err ) ? console.error( err ) : console.info( heroe1 );

    // ejemplo de calback hell y para evitar esto de a continuación nacieron las PROMESAS
    buscarHeroeCallback( heroeId2, ( err, heroe2 ) => {

        ( err ) ? console.error( err ) : console.info( heroe2 );

        console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión`);

        buscarHeroeCallback( heroeId3, ( err, heroe3 ) => {

            ( err ) ? console.error( err ) : console.info( heroe3 );
    
            console.log(`Enviando a ${ heroe1.nombre } ,  ${ heroe2.nombre } y a ${ heroe3.nombre } y Dios mio esto es un infierno de anidamientos de callbacks`);
    
        });

    });
 
});

const heroeId4 = 'daredevil';
const heroeId5 = 'antorcha';

// ejemplo de anidamiento similar a los callbacks
buscarHeroe( heroeId4 ).then( heroe => {
    console.log(`Enviando a ${ heroe.nombre } a la misión prometida`);
    // esto seria un promise hell
    buscarHeroe( heroeId5 ).then( heroe => {
        console.log(`Enviando un segundo heroe como ${ heroe.nombre } a la misión prometida por segunda vez`);
    });
});
// Observaremos que se ejecuto el console log fin de programa antes de la promesa. No sucedio lo mismo con los callbacks

// Pero hay una solucion de ejecutar promesas en paralelo
// Pero antes un ejemplo: ... 
// Promise.all( [ true, 'Hola', 123 ]).then( arr => {
//     console.log('promise.all', arr );
// });
Promise.all([ buscarHeroe( heroeId4 ), buscarHeroe( heroeId5 )])
    .then( ([ heroe1, heroe2 ]) => {
    // console.log('promise.all', heroes );
    console.log(`Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la misión prometida con array de heroes`);
}).catch( err => {
    // Si una de las dos promesas fallan, no se va a ejecutar la siguiente promesa ni siquiera nada que haya a continuacion
    alert(err);
}).finally( () => {
    console.log('Se terminó el promise.all');
})
console.log('Fin de programa');
