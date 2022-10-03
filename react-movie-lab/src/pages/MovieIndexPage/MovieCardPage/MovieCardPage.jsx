import "./MovieCardPage.css";
import {useState} from "react";
import {movies} from "../../../public/data.js"



function MovieCardPage(){
    const movieList = movies.map((element) => {
        console.log(element)
        return (
            <>
                <img className="movie-poster" src={`${element.poster_path}`} />
                <h1 className="movie-poster-title"> {element.title} </h1>
                <h2 className="movie-poster-release-date"> {element.release_date} </h2>
            </>
        )
    })


    return(
        <>
            <h1 className="movie-card-title"> Movie Card. jsx </h1>
            <div className="movie-card">
                {movieList}
            </div>
        </>
    )
}


export default MovieCardPage
