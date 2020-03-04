import {fetchMoviesRequest} from '../../api'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


const api = 'https://api.themoviedb.org';
const apiKey = '3128e219ac973ca4f4a5e4d8a6711ce4'

function* fetchRecords(action) {
    try {
        const moviesList = yield call(fetchMoviesRequest)
        yield put ({ type: "SET_MOVIES", value: moviesList })
    } catch (e) {
        yield put({type: "MOVIES_REQUEST_FAILED", message: e.message});
    }

}


export function* onFetchMovies() {
    yield takeLatest ('MOVIES_REQUEST', fetchRecords)
}

