/* eslint-disable linebreak-style */
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))
require('dotenv').config()
const Person = require('./models/person')

morgan.token('post', (request) => {
  if (request.method === 'POST')
    return JSON.stringify(request.body)
  else
    return ''
})
morgan.format('postFormat', ':method :url :status :res[content-length] - :response-time ms :post')
app.use(morgan('postFormat'))

  
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/info', (_request, response) => {
  Person.find({}).then(persons => {
    response.send(`
          <p>Phonebook has info for ${persons.length} people</p>
          <p>${new Date}</p>
          `)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

  
app.post('/api/persons', (request, response, next) => {
  const body = request.body
  
  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({ error: 'name or number missing' })
  }
  
  const person = new Person({
    name: body.name,
    number: body.number
  })
  
  person.save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson)
    })
    .catch(error => next(error))
})
  

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  
  next(error)
}
app.use(errorHandler)



// eslint-disable-next-line no-undef
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})