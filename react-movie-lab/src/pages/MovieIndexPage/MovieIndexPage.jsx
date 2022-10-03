import {movies} from "../../public/data.js"
import "./MovieIndexPage.css";

function MovieIndexPage({username}){
    console.log(movies);
    
    return (
        <div>
            <h1 className="title2"> {username} Movie Index Page .jsx</h1>
        </div>
    );
  }
  
export default MovieIndexPage;



// const movies = [
//     {
//       "poster_path": "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
//       "release_date": "2020-12-16",
//       "title": "Wonder Woman 1984",
//       "cast": [
//         "Gal Gadot",
//         "Pedro Pascal",
//         "Chris Pine",
//         "Kristen Wiig",
//         "Robin Wright"
//       ]
//     },