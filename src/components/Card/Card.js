import react from 'react';
import pokemonType from '../../helpers/pokemonTypes';

function Card({ pokemon }) {
    return (
        <div className="Card mt-8  mr-12 ml-12 bg-gray-600 rounded-xl text-center capitalize shadow-lg">
            <div className="Card__img">
                <img className="mx-auto" src={pokemon.sprites.front_default} alt=""/>
            </div>
            <div className="Card__name mb-4 font-semibold text-xl">
                {pokemon.name}
            </div>
            <div className="Card__types mx-24 flex justify-center mb-4 ">
                {pokemon.types.map(type => {
                    return (
                        <div class="Card__type btn-type" style={{ backgroundColor: pokemonType[type.type.name]}} >{type.type.name}</div>
                    )
                })}
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight mb-4">
                    <p className="title">Weight: {pokemon.weight}lbs</p>
                </div>
                <div className="Card__data Card__data--height mb-4">
                    <p className="title">Height: {pokemon.height}ft</p>
                </div>
                <div className="Card__data Card__data--ability mb-4" >
                    <p className="title">Abilities: {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>

        )
}

export default Card;