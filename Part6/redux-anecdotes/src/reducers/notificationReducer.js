const messageAtStart = 'Testing Testing'

const initialState = {
  content: messageAtStart,
  visibility: false
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            console.log('NOTIFICATION REDUCER:: ', action.content)    
            return state = { content: action.content, visibility: true }
        case 'HIDE_NOTIFICATION':
            return state = initialState
        default:
          return state
      }
}

export const showNotification = (content, duration) => {
  return async dispatch => {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      content
    })

    setTimeout(() => {
      dispatch ({
        type: 'HIDE_NOTIFICATION'
      })
    }, duration)
  }
  }

  /* export const showNotification = content => {
    return {
      type: 'SHOW_NOTIFICATION',
      content
    }
  }   */

/* export const hideNotification = () => {
    return {
      type: 'HIDE_NOTIFICATION'
    }
  } */

export default notificationReducer