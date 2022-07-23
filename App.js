// Avec Node en console sans Express
// console.log('Hello, Node!');

// Après installation d'Express 
// require appel express dans node_modules
const express = require('express')

// créationd'une instance Express pour notre serveur web
const app = express()

// port d'utilisation
const port = 3000

// get = méthode de la requête
// get/arg 1 : point de terminaison ('/')
// get/arg 2 : fonction f(2 args) après ('/') trouvé
// f/arg1 :  : recup obj request == req entrée ('/')
// f/arg2 :  : obj res == response == obj Express -> client
// méthode send -> renvoie notre message
app.get('/', (req, res) => res.send('Hello, Express!'))

// Démarrage de l'API Rest sur le port 3000 et écoute avec la methode listen
app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

