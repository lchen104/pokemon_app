const express = require('express')
const app = express()
const port = 5001

// Import pokemon
const pokemon = require('./models/pokemon.js')

// Setting up the view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('Index', {
        pokemon: pokemon
    })
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});