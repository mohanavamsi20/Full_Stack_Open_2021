import React from 'react'
import Person from './Person'

function Persons({persons,foundPerson, searchedPerson,deletePerson}) {
    const rows = () =>
        searchedPerson === ""
        ? (persons.map(p => <Person key={p.id} id={p.id} name={p.name} number={p.number} deletePerson={deletePerson}/>)
        ) : ( foundPerson.map(p => (<p key={p.id}>{p.name} {p.number}</p>))
        )
    return (
        <div>
            {rows()}
        </div>
    )
}

export default Persons