import Pokecard from "./Pokecard";

/** takes pokesmons as an array of pokemon objects, render Pokecard for each pokemon */ 

function Pokedex({pokemons}){
    return (
        <div>
        {pokemons.map(pokemon => Pokecard(pokemon))}
        </div>
    );
}

export default Pokedex;