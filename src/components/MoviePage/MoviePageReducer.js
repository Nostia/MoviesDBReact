const initialState = { currentMovie: {}}

const moviePage = (state = initialState, action) => {
    const newState = { ...state }

    switch(action.type) {
        case 'SET_MOVIE_BY_ID':
            console.log(action.value)
            newState.currentMovie = action.value;
            break
    }
    return newState
}

export default moviePage;
