import React from "react";
import MovieCard from "./MovieCard.js";
import { connect } from 'react-redux'

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.moviesListRequest()
  }

  render() {
    return (
      <div>
        <h1>Movies List</h1>
        <div className="movies-wrapper">
          {this.props.moviesList.map(movie => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesList: state.moviesList.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moviesListRequest: () => dispatch({ type: "MOVIES_REQUEST", value: ''})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
