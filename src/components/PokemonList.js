import React from 'react'

function PokemonList({ pokemon }) {
    return (
        <div className='col-1 m-auto mt-5'>
            <ul className='list-group'>
                {pokemon.map((item) => (<li className='list-group-item' key={item}>{item}</li>))}
            </ul>
        </div>
    )
}

export default PokemonList