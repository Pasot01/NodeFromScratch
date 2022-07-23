const express = require('express')

let pokemons = require('./mock-pokemons')

const app = express()

const port = 3000

// Point de terminaison Express = app.METHODE(CHEMIN,GESTIONNAIRE(req,res))
// app.get('/', (req, res) => res.send('Hello, Express! '))

app.get('/api/pokemons/', (req, res) => {
    // const nbPokemons = pokemons.length
    res.send(`Il y a ${pokemons.length} pokémons pour le moment dans le pokédex.`)
})

// Récupération d'un id et d'un nom avec params
app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id) 
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    res.send(`Vous avez demandé le pokémon ${pokemon.name}.`)
})


app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

