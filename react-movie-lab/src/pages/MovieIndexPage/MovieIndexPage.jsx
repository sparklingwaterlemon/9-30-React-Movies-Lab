import "./MovieIndexPage.css";
import MovieCardPage from "./MovieCardPage/MovieCardPage";



function MovieIndexPage({username}){
    return (
        <div>
            <h1 className="movie-index-title"> User - {username} </h1>
            <MovieCardPage />
        </div>
    );
  }
  
export default MovieIndexPage;



