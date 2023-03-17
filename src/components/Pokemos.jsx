import React, { useEffect, useState } from 'react'
import { getApiPoke } from './services/services';

const Pokemons = () => {
    const [pokemon, setPokemon] = useState({})

    const getPoke= async () => {
        const response = await getApiPoke();
        setPokemon(response);
    };

    useEffect(() => {
        getPoke();
    }, []);


    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default
        } alt="" width={300}/>

        </div>
    )
}

export default Pokemons