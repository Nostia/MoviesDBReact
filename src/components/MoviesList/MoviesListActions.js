export const MOVIES_REQUEST_SUCCEEDED = 'MOVIES_REQUEST_SUCCEEDED'
export const MOVIES_REQUEST_FAILED = 'MOVIES_REQUEST_FAILED'

export const MOVIES_REQUEST = 'MOVIES_REQUEST'
export const SET_MOVIES = 'SET_MOVIES'

export function fetchMoviesRequest() {
    return {
        type: MOVIES_REQUEST
    }
}



