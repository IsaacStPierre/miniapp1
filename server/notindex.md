const express = require('express');
const app = express();
const port = 8080;
const knex = require('knex')(require('../knexfile.js')['development'])


app.get('/', (req, res) => {
    res.status(200).json('This is the Root Route for MovieList');
})

app.listen(port, () => console.log(`Express server is listening on port ${port}`))