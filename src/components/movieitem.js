import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
//use link for link the button to movie website
import { Link } from "react-router-dom";
const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      <Card>
        <Card.Header>{props.mymovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.poster} alt={props.mymovie.title} />
            <footer>{props.mymovie.year}</footer>
          </blockquote>
        </Card.Body>
        
        <Link className="btn btn-primary" to={"/edit/"+props.mymovie._id}>Edit</Link>
      </Card>
    </div>
  );
}

export default MovieItem;