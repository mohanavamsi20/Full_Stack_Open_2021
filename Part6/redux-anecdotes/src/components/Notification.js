import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const visibility = { display: props.notification.visibility ? '' : 'none' }

  return (
    <div style={visibility}>
      <div style={style}>
        {props.notification.content}
      </div>
    </div>
  )
}

//export default Notification

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    search: state.search,
    notification: state.notification
  }
}


export default connect(mapStateToProps, null)(Notification)