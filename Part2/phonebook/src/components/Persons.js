import React from 'react'
import Person from './Person'

function Persons({persons,foundPerson, searchedPerson}) {
    const rows = () =>
        searchedPerson === ""
        ? (persons.map(p => <Person key={p.id} id={p.id} name={p.name} phone={p.phone}/>)
        ) : ( foundPerson.map(p => (<p key={p.id}>{p.name} {p.phone}</p>))
        )
    return (
        <div>
            {rows()}
        </div>
    )
}

export default Persons