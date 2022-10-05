import "./MovieDetailPage.css";
import NavBar from "../../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import {movies} from "../../../public/data.js"

function MovieDetailsPage({username}){
    //accessing the the params object and set it to the variable called id.
    let id = useParams().id;

    //filtering for the movie in our movie array
    //that is the same as the one in the provided by params

    //Saved it to a variable called filtered

    let filtered = movies.filter((movie) => {
        if (movie.title === id) {
            return movie;
        }
        return null;
    });

    return (
        <>
        <NavBar username={username}/>
        {filtered.map((movie) => {
            return (
            <div>
                <h1>{movie.title}</h1>
                <img alt={movie.title} src={movie.poster_path} />
                <p>{movie.release_date}</p>

                {movie.cast.map((element) => {
                    return <p>{element}</p>;
                })}
          </div>
        );
      })}
    </>
  );
};

export default MovieDetailsPage;


