import React from "react";
import "./MovieCard.css";
import {Link} from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/CardActions";

export default function MovieCard(props) {
  // console.log(props);
  return (
    <div className="movie-wrapper">
      <Card>
        <CardContent>
          <h3>{props.movieData.title}</h3>
          <img src={`http://image.tmdb.org/t/p/w185/${props.movieData.poster_path}`}/>
          <p>Vote: {props.movieData.vote_average}</p>
          <p>{props.movieData.overview.substring(0, 100)}</p>
        </CardContent>
        <CardActions>
          <Link to={`movie/${props.movieData.id}`}>
          <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
