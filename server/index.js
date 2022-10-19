//axios.get('http://localhost:4000/api/RandomPokemon').then((res => {
    //console.log(res)
//}))

const res = require("express/lib/response")

const pokeButton = document.getElementById('get-pokemon')
const pokeBall = document.getElementById('pokeball')
const BASE_URL = 'http://localhost:4000/api/'

const renderPokemon = ({ data }) => {
        data.forEach((pokemon) => {
                const pokemonContainer = document.createElement('div')
                const pokemonImg= document.createElement('img')
                const pokemonLabel = document.createElement('label')
                pokemonContainer.addEventListener('click', () => battlePokemon (pokemon))
                pokemonLabel.textContent = pokemon.name 
                pokemonImg.src = pokemon.sprites.front_default 
                pokemonContainer.append(pokemonImg, pokemonLabel)
                pokeBall.appendChild(pokemonContainer);
})

}


const contenders = [];

const battlePokemon = (pokemon) => {
 contenders.push(pokemon)
 if(contenders.length === 1) return 
 const [ contender1, contender2 ] = contenders 
 const pokemon1BattleRoll = Math.random () * contender1.base_experience
 const pokemon2BattleRoll = Math.random () * contender2.base_experience
 if(pokemon1BattleRoll > pokemon2BattleRoll){
     deletePokemon(contender1.id)
 } else {
     deletePokemon(contender2.id)
 }
 }
}

function deletePokemon (id) {
    axios.delete(`${BASE_URL}/pokemon/${id}`).then((res) => {
        pokeBall.innerHTML = ""
        renderPokemon(res);
})
}

pokeButton.addEventListener('click', () => {
    axios.get(`${BASE_URL}/api/all-pokemon`).then(renderPokemon)     
        
})
