const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_TERM':
            console.log('FILTER REDUCER:: ', action.content)    
            return action.content
        default:
          return state
    }      
}

export const search = (content) => {
    return {
        type: 'SEARCH_TERM',
        content
      }
}

export default filterReducer