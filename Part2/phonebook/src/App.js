import React, { useState ,useEffect} from 'react'
import Persons from './components/Persons'
import FilterModule from './components/FilterModule'
import PersonForm from './components/PersonForm'
// import axios from 'axios'
import service from './services/names'

const App = () => {
  const [ persons, setPersons] = useState([])

  useEffect(() => {
    service
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

      service
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('')
        setNewPhone('')
      })
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
      <Persons persons={persons} foundPerson={foundPerson} searchedPerson={searchedPerson}/>
    </div>
  )

}

export default App