export const MOVIE_BY_ID_REQUEST_SUCCEEDED = 'MOVIE_BY_ID_REQUEST_SUCCEEDED'
export const MOVIE_BY_ID_REQUEST_FAILED = 'MOVIE_BY_ID_REQUEST_FAILED'

export const MOVIE_BY_ID_REQUEST = 'MOVIE_BY_ID_REQUEST'
export const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE'

export function fetchMovieByIdRequest(id) {
    return {
        type: MOVIE_BY_ID_REQUEST,
        id: id
    }
}



