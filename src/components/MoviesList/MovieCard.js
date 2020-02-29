import React from "react";
import "./MovieCard.css";

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
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
