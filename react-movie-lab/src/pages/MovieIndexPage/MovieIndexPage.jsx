import "./MovieIndexPage.css";
import MovieCardPage from "./MovieCardPage/MovieCardPage";



function MovieIndexPage({username}){
    return (
        <div className="movie-index-page">
            <MovieCardPage />
        </div>
    );
  }
  
export default MovieIndexPage;



