import React, { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name} {person.phone}</p>
  )
}

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

  function Persons({persons,foundPerson, searchedPerson}) {
    const rows = () =>
        searchedPerson === ""
        ? (persons.map(p => <Person name={p.name} phone={p.phone}/>)
        ) : ( foundPerson.map(p => (<p>{p.name} {p.phone}</p>))
        )
    return (
        <div>
            {rows()}
        </div>
    )
}

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handlePersonSearch} value={searchedPerson}/>
      </div> 
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Numbers: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons foundPerson={foundPerson} />
    </div>
  )

}

export default App