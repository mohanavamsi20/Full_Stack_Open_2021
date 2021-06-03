import React from 'react'

function Person({ id,name,phone,deletePerson }) {
    return (
      <div>
        <p>{name} {phone} <button onClick={() => deletePerson(id,name)}>delete</button></p>
      </div>
    )
  }

export default Person