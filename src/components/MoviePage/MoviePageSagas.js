import {fetchMovieByIdRequest} from '../../api'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


const api = 'https://api.themoviedb.org';
const apiKey = '3128e219ac973ca4f4a5e4d8a6711ce4'

function* fetchMovieById(action) {
    console.log(action)
    try {
        const movieData = yield call(fetchMovieByIdRequest, action.value)
        yield put ({ type: "SET_MOVIE_BY_ID", value: movieData })
    } catch (e) {
        yield put({type: "MOVIE_BY_ID_REQUEST_FAILED", message: e.message});
    }

}


export function* onFetchMovieById() {
    yield takeLatest ('MOVIE_BY_ID_REQUEST', fetchMovieById)
}

