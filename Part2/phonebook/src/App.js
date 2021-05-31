import React, { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name} {person.phone}</p>
  )
}

const App = (props) => {
  const [ persons, setPersons ] = useState([
    { id:1,
      name: 'Arto Hellas',
      phone:'854678942'
    },
    {
      id:2,
      name: 'Ada Lovelace',
      phone:'88455665'
    }])

  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(item => item.name === newName)){
      alert(`${newName} is alrady added to phonebook`)
    }
    else{
      const nameObject = {
        name: newName,
        phone:newPhone,
        id: persons.length + 1,
      }
  
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewPhone('')
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange}/>
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