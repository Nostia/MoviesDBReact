import React from "react";
import {connect} from "react-redux";

class MoviePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount( ) {
        const { match: { params } } = this.props;
        this.props.currentMovieRequest(params.id)
    }

    render(){
        return (
            <div>
                <h1>Movie page</h1>
                {this.props.currentMovie.original_title}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        currentMovie: state.moviePage.currentMovie
    };
};

const mapDispatchToProps = dispatch => {
    return {
        currentMovieRequest: (id) => dispatch({ type: "MOVIE_BY_ID_REQUEST", value: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
