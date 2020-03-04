import {all } from 'redux-saga/effects'

import {onFetchMovies} from './components/MoviesList/MoviesListSagas'
import {onFetchMovieById} from './components/MoviePage/MoviePageSagas'


export default function* rootSaga() {
    yield all([
        onFetchMovies(),
        onFetchMovieById()
    ])
}
