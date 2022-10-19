const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

let pokemon = [];
axios.get('https://pokeapi.co/api/v2/pokemon').then(({data: {results} }) => {
    pokemon = results 
})

app.get('/api/RandomPokemon', (req, res) => {
    const rando = pokemon[Math.floor(math.random() * pokemon.length)]
    res.status(200).send('rando');
})

app.get('./api/All-pokemon', (req, res) => {
 res.status(200).send('pokemon');
})

app.delete('./api/pokemon/:id', (req, res) => {
    const {id} = req.params; 
    pokemonArr = pokemonArr.filter((pokemon) => pokemon.id !== +id);
    res.status(200).send(pokemonArr);
})

app.listen(4000, ()=> console.log('listening on 4000'))

