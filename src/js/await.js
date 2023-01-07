import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesIds = [
    'daredevil',
    'antorcha',
    'hulk'
];

// const heroesPromesas = heroesIds.map( id => buscarHeroe( id ) );
// o lo que es lo mismo
const heroesPromesas = heroesIds.map( buscarHeroe );


export const obtenerHeroesArr = async() => {
    // const heroesArr = [];
    
    // for( const id of heroesIds){
    //     esto seria con promesas
    //     buscarHeroeAsync( id )
    //         .then( heroe => heroesArr.push( heroe ));
    //      ahora con await que previamente habremos declarado la funcion como asyncrona con async
    //      const heroe = await buscarHeroe( id );
    //     heroesArr.push( buscarHeroe( id ) );

    // }

    // setTimeout( () => {
    //     console.log('Obtener heroes');
    //     console.table( heroesArr );
    // }, 1000);
    
    // el await SIEMPRE FUERA DE UN FOR. SIEMPRE DONDE SE HAGA UNA VEZ Y A SER POSIBLE GLOBAL
    // return await Promise.all(heroesArr);
    return await Promise.all( heroesIds.map( buscarHeroe ) );
    
}

export const obtenerHeroAwait = async( id ) => {

    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;

    } catch (error) {
        console.warn('Error constrolado con CATCH');
        // podemos usar un throw
        // throw error
        // pero si queremos que nos devuelva algo podriamos probar a mostrar un objeto por defecto
        // quitando el throw porque no sigue la ejecucion
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }

    

    

}

export const heroesCiclo = async() => {
    console.time('HeroesCiclo');
    // CON FOREACH
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log( heroe ));
    // console.log( heroes );

    // CON FOR AWAIT
    for await( const heroe of heroesPromesas ) {
        console.log( heroe );
    }

    

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async ( id ) => {
    if( (await buscarHeroeAsync( id )).nombre === 'Hulk') {
        console.log(' Es el mas fuerte');
    }else{
        console.log('Nada');
    }
}