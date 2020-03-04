const initialState = { items: []}

const moviesList = (state = initialState, action) => {
    const newState = { ...state }
    switch(action.type) {
        case 'SET_MOVIES':
            newState.items = action.value.results;
            break
    }
    return newState
}

export default moviesList;
