const api = 'https://api.themoviedb.org';
const apiKey = '3128e219ac973ca4f4a5e4d8a6711ce4';

export async function fetchMoviesRequest() {
    try {
        const response = await fetch(`${api}/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        const data = response.json()
        return data
    } catch (e) {
        console.log(e)
    }
}


export async function fetchMovieByIdRequest(id) {
    try {
        const response = await fetch(`${api}/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        const data = response.json()
        return data
    } catch (e) {
        console.log(e)
    }
}
