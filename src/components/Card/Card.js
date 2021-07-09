import React from 'react';
import pokemonType from '../../helpers/pokemonTypes';

function Card({ pokemon }) {
    return (
        <div className="mt-8 ml-12 mr-12 text-center capitalize bg-gray-600 shadow-lg Card rounded-xl">
            <div className="Card__img">
                <img className="mx-auto" src={pokemon.sprites.front_default} alt=""/>
            </div>
            <div className="mb-4 text-xl font-semibold Card__name">
                {pokemon.name}
            </div>
            <div className="flex justify-center mx-24 mb-4 space-between Card__types ">
                {pokemon.types.map(type => {
                    return (
                        <div class="Card__type btn-type" style={{ backgroundColor: pokemonType[type.type.name]}} >{type.type.name}</div>
                    )
                })}
            </div>
            <div className="Card__info">
                <div className="mb-4 Card__data Card__data--weight">
                    <p className="title">Weight: {pokemon.weight}lbs</p>
                </div>
                <div className="mb-4 Card__data Card__data--height">
                    <p className="title">Height: {pokemon.height}ft</p>
                </div>
                <div className="mb-4 Card__data Card__data--ability" >
                    <p className="title">Abilities: {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>

        )
}

export default Card;