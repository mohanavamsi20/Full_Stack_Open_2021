import React, { useState ,useEffect} from 'react'
import Persons from './components/Persons'
import FilterModule from './components/FilterModule'
import PersonForm from './components/PersonForm'
// import axios from 'axios'
import service from './services/names'
import './App.css'

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
  const [notify, setNotify] = useState(null)
  const [error, setError] = useState(null)

  const Notify = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="notify">
        {message}
      </div>
    )
  }

  const Error = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="error">
        {message}
      </div>
    )
  }


  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phone:newPhone,
    }
    if(persons.some(item => item.name === newName) === true){
      let index = persons.findIndex(p => p.name === newName);
      let id = persons[index].id;
      let checkNameDialogue = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`);
      if (checkNameDialogue === true) {
        service
          .update(id, nameObject)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
          })
          setNotify(
            `Updated ${newName}`
          )
          setTimeout(() => {
            setNotify(null)
          }, 5000)
        }
    }
    else{
      service
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('')
        setNewPhone('')
      })
      setNotify(
        `Added ${newName}`
      )
      setTimeout(() => {
        setNotify(null)
      }, 5000)
    }
  }

  const deletePerson = (id, name) => {
    let result = window.confirm(`Delete ${name}?`);
    console.log(id)
    if (result === true) {
      service
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          setNotify(
            `${name} succesfully deleted`
          )
          setTimeout(() => {
            setNotify(null)
          }, 5000)
        })
        .catch(error => {
          setError(
            `Information of '${name}' has already been removed from server`
          )
          setTimeout(() => {
            setError(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== id))
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
      <Notify message={notify} />
      <Error message={error} />
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
      <Persons persons={persons} foundPerson={foundPerson} searchedPerson={searchedPerson} deletePerson={deletePerson}/>
    </div>
  )

}

export default App