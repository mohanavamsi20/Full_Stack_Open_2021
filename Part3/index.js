const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('post', (request) => {
  if (request.method === 'POST')
    return JSON.stringify(request.body)
  else
    return ''
})
morgan.format('postFormat', ':method :url :status :res[content-length] - :response-time ms :post')
app.use(morgan('postFormat'))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "645-568-2014"
      },
      {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
      },
      {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
      },
      {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
      }
  ]
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/info',(request,response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date}</p>`)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const Person = persons.find(p => p.id === id)
    
    if (Person) {
      response.json(Person)
    } else {
      response.status(404).end()
    }
  })

  const randID = () => {
    const maxId = Math.floor((Math.random() * 100) + 0);
    return maxId
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name||!body.number) {
      return response.status(400).json({ 
        error: 'name or number is missing' 
      })
    }
    else if(persons.some(item => item.name === body.name) === true){
      return response.status(400).json({ 
        error: 'name must be unique' 
      })
    }
  
    const person = {
      id: randID(),
      name:body.name,
      number:body.number
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })
  

  app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(p => p.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})