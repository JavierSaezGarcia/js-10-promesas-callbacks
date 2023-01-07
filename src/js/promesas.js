// Promesas
const heroes2 = {
    daredevil: {
        nombre: 'Daredevil',
        poder: 'Sensibilidad al sonido'
    },
    antorcha: {
        nombre: 'Antorcha humana',
        poder: 'Poder del fuego'
    },
    hulk: {
        nombre: 'Hulk',
        poder: 'Fuerza bruta'
    }

}

export const buscarHeroe = ( id ) => {

    const heroe = heroes2[id];

    // const promesa = new Promise();
    // return promesa
    // o lo que es lo mismo que lo anterior
    // Las promesas reciben dos argumentos:
    //     1º cuando todo se recibe correctamente: 'resolve'
    //     2º cuando hay un error: 'reject'
    return new Promise( ( resolve, reject ) => {
      
        if( heroe ){
           setTimeout( () => resolve( heroe ), 1000);
        }else{
            reject(`No existe este heroe con la id:  ${ id } `)
        }


    });
}

// ***************** Promise.race ****************************

const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});
const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});
const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Promesa Rápida'), 1000);
});

// si no queremos poner la palabra reservada export podemos hacerlo como un barril 
export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}

// ************* async *********************
// LAS PROMESAS SE EJECUTARAN EN PARALELO Y SI UNA TIENE UN ERROR SE EJECUTARA 
export const buscarHeroeAsync = async( id ) => {

    const heroe = heroes2[id];

   
    if( heroe ){
        return  heroe;
    }else{
        // prinmera forma
        throw `No existe este heroe con la id:  ${ id } `;
        // y la segunda nos da mas informacion del error
        // throw Error(`No existe este heroe con la id:  ${ id } `);
    }
    
}