const heroes = {
    spider: {
        nombre: 'Spiderman',
        poder: 'Poder aracnido'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    capi: {
        nombre: 'Capitán America',
        poder: 'Escudo poderoso'
    }

}
// En los callbacks siempre el primer argumento que vamos a enviar es un error
export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];
    
    if ( heroe ) {
        callback( null, heroe );
    }
    else
    {
        callback(`No existe este heroe con la id:  ${ id } `);
    }
    // heroe ? callback( null) : callback(`No existe este heroe con la id:  ${ id } `);   

    // callback ( heroe );
}