export const PokemonCards = ({ id, PokemonData }) => {
    return <li className="pokemon-card">
        <figure>
            <img src={PokemonData.sprites.other.dream_world.front_default} alt={PokemonData.name} className="pokemon-image" />
        </figure>
        <h1 className="pokemon-name">{PokemonData.name}</h1>
        <div className="pokemon-info pokemon-highlight">
            <p>{PokemonData.types.map(x => x.type.name).join(', ')}</p>
        </div>
        <div className="grid-three-cols">
            <div className="pokemon-info">
                <p>{PokemonData.base_experience}</p>
                <span> Experience:</span>
            </div>
            <div className="pokemon-info">
                <p>{PokemonData.stats[1].base_stat}</p>
                <span>Attack:</span>
            </div>
            <div className="pokemon-info">
                <p>
                    {PokemonData.abilities
                        .map((abilityInfo) => abilityInfo.ability.name)
                        .slice(0, 1)
                        .join(", ")}
                </p>
                <span> Abilities: </span>
            </div>
        </div>
    </li>
}