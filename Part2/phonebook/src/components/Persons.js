import React from 'react'
import Person from './Person'

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

export default Persons