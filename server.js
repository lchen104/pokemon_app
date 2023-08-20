const express = require('express')
const app = express()
const port = 5001

// Setting up the view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});