import { buscarHeroe } from "./js/callbacks";
import "./styles.css";

const heroeId1 = 'spider';
const heroeId2 = 'iron';
const heroeId3 = 'capi';
// Callback es pasar una funcion enviada como un argumento
buscarHeroe( heroeId1, ( err, heroe1 ) => {
    
    // if( err ){
    //     console.error( err );
    // }else {
    //     console.info( heroe );
    // } 
    
    ( err ) ? console.error( err ) : console.info( heroe1 );

    // ejemplo de calback hell y para evitar esto de a continuación nacieron las PROMESAS
    buscarHeroe( heroeId2, ( err, heroe2 ) => {

        ( err ) ? console.error( err ) : console.info( heroe2 );

        console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión`);

        buscarHeroe( heroeId3, ( err, heroe3 ) => {

            ( err ) ? console.error( err ) : console.info( heroe3 );
    
            console.log(`Enviando a ${ heroe1.nombre } ,  ${ heroe2.nombre } y a ${ heroe3.nombre } y Dios mio esto es un infierno de anidamientos de callbacks`);
    
        });

    });
 
});

console.log('Fin de programa');
