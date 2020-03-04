import {combineReducers} from 'redux'
import moviesList from './components/MoviesList/MoviesListReducer.js'
import moviePage from './components/MoviePage/MoviePageReducer.js'

const rootReducer = combineReducers({
    moviesList: moviesList,
    moviePage: moviePage
})

export default rootReducer
