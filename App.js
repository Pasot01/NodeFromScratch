const express = require('express')

const app = express()

const port = 3000

// Point de terminaison Express = app.METHODE(CHEMIN,GESTIONNAIRE(req,res))
app.get('/', (req, res) => res.send('Hello, Express! '))

// Récupération d'un id et d'un nom avec params
app.get('/api/pokemons/:id/:name', (req, res) => {
    const id = req.params.id 
    const name= req.params.name
    res.send(`Le pokémon n°${id} est ${name}.`)
})


app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

