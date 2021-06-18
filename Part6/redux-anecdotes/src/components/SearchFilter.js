import React from 'react'
import { search } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const SearchFilter = (props) => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault()
    const content = event.target.value
    props.search(content)

  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

//export default SearchFilter

export default connect(null, { search })(SearchFilter)