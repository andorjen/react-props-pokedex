import "./Pokecard.css";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
function Pokecard({ id, name, type, base_experience }) {
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-name">{name}</h3>
            <img src={`${BASE_URL}/${id}.png`} 
                alt={name}
            />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
}

export default Pokecard;