import React from "react";
import MovieCard from "./MovieCard.js";

export default class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { id: 1, title: "Movie1" },
        { id: 2, title: "Movie2" },
        { id: 3, title: "Movie3" },
        { id: 4, title: "Movie4" },
        { id: 5, title: "Movie5" }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Movies List</h1>
        <div className="movies-wrapper">
          {this.state.movies.map(movie => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </div>
    );
  }
}
