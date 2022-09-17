import React from "react";

const Movie = props => {
    const { movie } = props;

    return (
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina"
                       src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    />
                    <h2>{movie.original_title}</h2>
                    <h3>Release date : {movie.release_date}</h3>
                    <h3>Vote average : {movie.vote_average}</h3>
                </div>
                <div classname="movie_desc">
                    <p className="text">{movie.overview}</p>
                </div>
            </div> 
        </div>
    )
}

export default Movie;