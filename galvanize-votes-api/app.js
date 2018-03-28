require('dotenv').load()

const express = require("express")
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require ('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())


app.get("/", (request, response) => {
    response.send('Hi!')
})

app.use((request, response, next) => {
    response.status(404).send()
})

app.use((request, reponse, next, error) => {
    console.error(error.message)
    response.status(500).send(error.message)
})

module.exports = app