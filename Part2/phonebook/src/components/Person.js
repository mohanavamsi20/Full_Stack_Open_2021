import React from 'react'

function Person({ person }) {
    return (
      <p>{person.name} {person.phone}</p>
    )
  }

export default Person