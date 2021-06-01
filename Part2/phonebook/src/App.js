import React, { useState } from 'react'
import Persons from './components/Persons'
import FilterModule from './components/FilterModule'
import PersonForm from './components/PersonForm'

const App = (props) => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '01234567' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [searchedPerson, setSearchedPerson] = useState('')
  const [foundPerson, setFoundPerson] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(item => item.name === newName)){
      alert(`${newName} is alrady added to phonebook`)
    }
    else{
      const nameObject = {
        name: newName,
        phone:newPhone,
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

  const handlePersonSearch = (event) => {
    setSearchedPerson(event.target.value);
    const personResult = persons.filter(person =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFoundPerson(personResult);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterModule handlePersonSearch={handlePersonSearch} searchedPerson={searchedPerson}/> 
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        newName={newName}
        handlePhoneChange={handlePhoneChange}
        newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <Persons foundPerson={foundPerson} />
    </div>
  )

}

export default App