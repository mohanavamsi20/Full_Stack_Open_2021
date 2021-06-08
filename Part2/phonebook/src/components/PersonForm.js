import React from 'react'

function PersonForm({addPerson, handleNameChange, newName, handleNumberChange, newNumber}) {
    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Numbers: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm