const knex = require('knex')(require('../../knexfile.js')['development'])

const request = (req, res) => {
    console.log('working on get for movielist')

    knex('movielist')
        .select('*')
        .then(data => {
            res.status(200).json(data);
        })

}

const detailedRequest = (req, res) => {
    console.log('working on detailed get for movielist')

    knex('movielist')
        .select('*')
        .where('movielist.id', '=', parseInt(req.params.id))
        .then(data => {
            res.status(200).json(data);
        })

}

const add = (req, res) => {
    console.log('working on post for movielist')

    knex('movielist')
        .insert({
            title: req.body.title
        })
        .then(() => {
            res.send(`Added ${req.body.title}`)
        })

}

const update = (req, res) => {
    console.log('working on patch for movielist')

    knex('movielist')
        .where('movielist.id', '=', parseInt(req.params.id))
        .update(req.body, Object.keys(req.body))
        .then(data => {
            res.status(200).json(data);
        })

}

const remove = (req, res) => {
    console.log(`working on delete for 'movielist/${req.params.id}'`)

    knex('movielist')
        .where('id', '=', parseInt(req.params.id))
        .del()
        .then(data => {
            res.status(200).json(`Number of records deleted: ${data}`);
        })
}

module.exports = { request, detailedRequest, add, update, remove }
