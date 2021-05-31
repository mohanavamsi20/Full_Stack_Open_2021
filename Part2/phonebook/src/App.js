import React, { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name}</p>
  )
}

const App = (props) => {
  const [ persons, setPersons ] = useState([
    { id:1,
      name: 'Arto Hellas'
    },
    {
      id:2,
      name: 'Ada Lovelace'
    }])
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(item => item.name === newName)){
      alert(`${newName} is alrady added to phonebook`)
    }
    else{
      const nameObject = {
        name: newName,
        id: persons.length + 1,
      }
  
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.id} person={person} /> )}
    </div>
  )

}

export default App